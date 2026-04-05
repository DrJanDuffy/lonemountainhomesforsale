# Lone Mountain Homes for Sale

Marketing site for [lonemountainhomesforsale.com](https://www.lonemountainhomesforsale.com/) — Next.js App Router, Lone Mountain / 89129 focus, photo gallery from repo assets, RealScout search, and GBP-aligned NAP + JSON-LD.

## Scripts

```bash
npm run dev    # local development
npm run build  # production build
npm run lint   # ESLint
```

For Vercel parity checks, prefer `vercel build` when the CLI is configured.

## Environment

Copy `.env.example` to `.env.local` and set optional values:

- `NEXT_PUBLIC_REALSCOUT_AGENT_ID` — RealScout encoded agent/office id (default is set in code).

## Assets

Listing photography lives in `public/assets/` (`photo_001.jpg` … `photo_033.jpg`). Add or replace files there to update the gallery and hero source image.

## License / compliance

Dr. Jan Duffy · Nevada license S.0197614.LLC · Berkshire Hathaway HomeServices Nevada Properties. Confirm NAP and hours against your live Google Business Profile before launch.
