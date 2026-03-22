import cors from "cors";
import express from "express";
import checkRoutes from "./routes/checkRoutes.js";

const app = express();

const allowedOrigin = process.env.CLIENT_URL || "*";

app.use(
  cors({
    origin: allowedOrigin,
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "website-trust-analyzer-api" });
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "website-trust-analyzer-api" });
});

app.use("/", checkRoutes);
app.use("/api", checkRoutes);

app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.originalUrl} not found.` });
});

app.use((err, _req, res, _next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message || "Internal server error.",
  });
});

export default app;
