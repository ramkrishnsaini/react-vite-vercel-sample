# React + Vite + Vercel (Free)

Minimal React app created with Vite and ready for free static hosting on Vercel.

## Local Dev
```bash
npm i
npm run dev
# open http://localhost:5173
```

## Build
```bash
npm run build
```

The production files are in `dist/`.

## Deploy to Vercel
1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket).
2. In Vercel, "New Project" → Import your repo.
3. Framework Preset: **Vite** (auto-detected).
4. Build Command: `vite build` (default `npm run build`).
5. Output Directory: `dist`.
6. Add the included `vercel.json` for SPA routing.
7. Deploy.

## Notes
- Platform independent: Works on any static host.
- For client routing, Vercel uses `vercel.json` rewrite to `index.html`.
