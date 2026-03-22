# Website Trust Analyzer

A production-style full-stack web app that evaluates how trustworthy a website URL appears based on multiple signals and returns a trust score, status, and reasons.

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, Framer Motion, Axios
- Backend: Node.js, Express, Axios
- Deployment: Render (backend), Vercel (frontend)

## Project Structure

```text
root/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
└── README.md
```

## Features

- Dark premium UI with glassmorphism cards
- Gradient animated background
- Responsive layout for mobile and desktop
- URL validation and error handling
- Trust score from `0-100`
- Color-coded status: `Safe`, `Suspicious`, `Dangerous`
- Detailed analysis reasons
- Loading spinner and animated results
- Optional Google Safe Browsing integration
- Modular backend architecture with controllers and routes

## Local Development

### 1. Backend setup

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

The backend runs on `http://localhost:5000`.

### 2. Frontend setup

Open a second terminal:

```bash
cd client
npm install
cp .env.example .env
npm run dev
```

The frontend runs on `http://localhost:5173`.

## Environment Variables

### Server `.env`

```env
PORT=5000
CLIENT_URL=http://localhost:5173
GOOGLE_SAFE_BROWSING_API_KEY=your_google_safe_browsing_api_key
```

### Client `.env`

```env
VITE_API_BASE_URL=http://localhost:5000
```

## Backend API

### `POST /api/check`

Request body:

```json
{
  "url": "https://example.com"
}
```

Response:

```json
{
  "score": 92,
  "status": "Safe",
  "reasons": [
    "Website uses HTTPS.",
    "No suspicious keywords detected."
  ]
}
```

## Trust Analysis Signals

- HTTPS usage
- Suspicious keywords in the URL
- Excessive URL length
- Optional Google Safe Browsing lookup
- Suspicious symbols, subdomain depth, raw IP detection, and URL shortener checks

## Deploy Backend on Render

1. Push the repository to GitHub.
2. Sign in to Render and click `New +` -> `Web Service`.
3. Connect your GitHub repository.
4. Set the Root Directory to `server`.
5. Use these settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Add environment variables:
   - `PORT=5000`
   - `CLIENT_URL=https://your-frontend-domain.vercel.app`
   - `GOOGLE_SAFE_BROWSING_API_KEY=your_google_safe_browsing_api_key`
7. Deploy and copy the backend URL, for example `https://your-app.onrender.com`.

## Deploy Frontend on Vercel

1. Import the same GitHub repository into Vercel.
2. Set the Root Directory to `client`.
3. Framework preset should auto-detect as `Vite`.
4. Add the environment variable:
   - `VITE_API_BASE_URL=https://your-app.onrender.com`
5. Deploy the project.
6. After deployment, update the Render backend `CLIENT_URL` value to your actual Vercel domain if needed.

## Production Notes

- The server already supports `process.env.PORT || 5000`.
- CORS is enabled and restricted to `CLIENT_URL` when provided.
- Google Safe Browsing is optional; the app still works without an API key.
- For free hosting tiers, Render may cold-start. The UI shows a loading state during analysis.

