import axios from "axios";

const SAFE_BROWSING_ENDPOINT =
  "https://safebrowsing.googleapis.com/v4/threatMatches:find";

export const checkGoogleSafeBrowsing = async (url) => {
  const apiKey = process.env.GOOGLE_SAFE_BROWSING_API_KEY;

  if (!apiKey || apiKey === "your_google_safe_browsing_api_key") {
    return {
      enabled: false,
      listed: false,
      reason: "Google Safe Browsing is not configured.",
    };
  }

  try {
    const { data } = await axios.post(
      `${SAFE_BROWSING_ENDPOINT}?key=${apiKey}`,
      {
        client: {
          clientId: "website-trust-analyzer",
          clientVersion: "1.0.0",
        },
        threatInfo: {
          threatTypes: [
            "MALWARE",
            "SOCIAL_ENGINEERING",
            "UNWANTED_SOFTWARE",
            "POTENTIALLY_HARMFUL_APPLICATION",
          ],
          platformTypes: ["ANY_PLATFORM"],
          threatEntryTypes: ["URL"],
          threatEntries: [{ url }],
        },
      },
      {
        timeout: 5000,
      }
    );

    const hasMatches = Array.isArray(data.matches) && data.matches.length > 0;

    return {
      enabled: true,
      listed: hasMatches,
      reason: hasMatches
        ? "Google Safe Browsing flagged this URL."
        : "Google Safe Browsing found no known threats.",
    };
  } catch (_error) {
    return {
      enabled: true,
      listed: false,
      reason: "Google Safe Browsing check could not be completed.",
    };
  }
};

