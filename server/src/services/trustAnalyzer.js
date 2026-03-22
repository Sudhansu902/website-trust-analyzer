import { checkGoogleSafeBrowsing } from "./safeBrowsingService.js";

const suspiciousKeywords = ["login", "verify", "bank", "secure", "update"];
const urlShorteners = [
  "bit.ly",
  "tinyurl.com",
  "t.co",
  "goo.gl",
  "ow.ly",
  "is.gd",
  "buff.ly",
];

const clampScore = (value) => Math.max(0, Math.min(100, value));

const determineStatus = (score) => {
  if (score >= 75) {
    return "Safe";
  }

  if (score >= 45) {
    return "Suspicious";
  }

  return "Dangerous";
};

const isIpHost = (hostname) => /^\d{1,3}(\.\d{1,3}){3}$/.test(hostname);

export const analyzeWebsiteUrl = async (url) => {
  const parsed = new URL(url);
  const reasons = [];
  let score = 100;

  if (parsed.protocol === "https:") {
    reasons.push("Website uses HTTPS.");
  } else {
    score -= 25;
    reasons.push("Website does not use HTTPS.");
  }

  const loweredUrl = url.toLowerCase();
  const matchedKeywords = suspiciousKeywords.filter((keyword) =>
    loweredUrl.includes(keyword)
  );

  if (matchedKeywords.length > 0) {
    score -= matchedKeywords.length * 10;
    reasons.push(
      `Suspicious keyword${matchedKeywords.length > 1 ? "s" : ""} detected: ${matchedKeywords.join(
        ", "
      )}.`
    );
  } else {
    reasons.push("No suspicious keywords detected.");
  }

  if (url.length > 75) {
    score -= 15;
    reasons.push("URL is unusually long, which can indicate obfuscation.");
  } else {
    reasons.push("URL length appears normal.");
  }

  if (parsed.hostname.split(".").length > 3) {
    score -= 10;
    reasons.push("URL contains many subdomains, which can be suspicious.");
  }

  if (isIpHost(parsed.hostname)) {
    score -= 20;
    reasons.push("URL uses a raw IP address instead of a domain name.");
  }

  if (/[!@#$%^&*(),?":{}|<>]/.test(parsed.pathname + parsed.search)) {
    score -= 8;
    reasons.push("URL contains unusual special characters.");
  }

  if (urlShorteners.includes(parsed.hostname.replace(/^www\./, ""))) {
    score -= 20;
    reasons.push("URL uses a shortening service, which can hide the final destination.");
  }

  const safeBrowsing = await checkGoogleSafeBrowsing(url);

  if (safeBrowsing.enabled) {
    reasons.push(safeBrowsing.reason);
  }

  if (safeBrowsing.listed) {
    score -= 35;
  }

  score = clampScore(score);

  return {
    score,
    status: determineStatus(score),
    reasons,
  };
};
