const ensureProtocol = (value) => {
  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return `https://${value}`;
};

export const normalizeUrlInput = (input) => {
  if (!input || typeof input !== "string") {
    throw new TypeError("Invalid URL");
  }

  const trimmed = input.trim();

  if (!trimmed) {
    throw new TypeError("Invalid URL");
  }

  const prepared = ensureProtocol(trimmed);
  const parsed = new URL(prepared);

  if (!parsed.hostname || !parsed.hostname.includes(".")) {
    throw new TypeError("Invalid URL");
  }

  return parsed.toString();
};

