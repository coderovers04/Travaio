# Travaio React Frontend

A React rewrite of the static frontend. Uses Vite, Tailwind CDN, Leaflet.

## Prerequisites
- Node.js 18+

## Setup
```bash
npm install
```

Create a `.env` file (optional):
```
VITE_API_BASE_URL=https://travaio-puhl.onrender.com
```
If not set, it defaults to the above URL.

## Development
```bash
npm run dev
```
Open the printed local URL. Routes:
- /           Home
- /about      About
- /contact    Contact form
- /login      Login
- /signup     Signup
- /dashboard  Auth required
- /monitor?tripId=...  Auth required

## Build
```bash
npm run build
npm run preview
```

## Notes
- Auth token and user info are stored in localStorage (`travaio_token`, `travaio_user`).
- Map/monitor uses Leaflet and browser geolocation.
