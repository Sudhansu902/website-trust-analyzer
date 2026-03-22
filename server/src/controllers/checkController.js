import { analyzeWebsiteUrl } from "../services/trustAnalyzer.js";
import { normalizeUrlInput } from "../utils/urlUtils.js";

export const checkWebsiteTrust = async (req, res, next) => {
  try {
    const { url } = req.body;
    const normalizedUrl = normalizeUrlInput(url);
    const analysis = await analyzeWebsiteUrl(normalizedUrl);

    res.json(analysis);
  } catch (error) {
    if (error.name === "TypeError") {
      return res.status(400).json({ message: "Please enter a valid website URL." });
    }

    return next(error);
  }
};

