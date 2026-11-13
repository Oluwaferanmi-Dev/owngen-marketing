# OwnGen marketing website

Next.js App Router, React, TypeScript and Tailwind CSS. The site uses the supplied OwnGen v1 logo, design tokens, self-hosted Poppins, Inter and JetBrains Mono fonts, favicon and social artwork. The interactive studio is a labeled concept with three illustrative artworks, independent of the desktop app.

## Run locally

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. No environment variables are required for preview. Run `npm run typecheck`, `npm run lint` and `npm run build` for release checks. Run `npm start` to serve the production build.

## Configuration

Edit `lib/product.ts` for the product name, price, minimum targets, support address, brand paths, navigation, FAQ and release status. The environment template is `.env.example`. Set `NEXT_PUBLIC_SITE_URL` to the approved canonical origin at launch. The release flag and a real HTTPS Gumroad product URL must both be set for checkout to appear. Preview pages block indexing. Changes to public configuration require a rebuild.

## Page map

Home, Features, How it works, System requirements, Pricing, Download, FAQ and Support. The /buy path redirects to /pricing. The footer links to Terms, Content policy, Privacy, Refunds, Complaints and intimate-image reporting. The site includes a custom 404, sitemap, robots rules, canonicals and social metadata.

## Deploy a preview

Import the repository into the intended Vercel team as a Next.js project. Use the repository root, Node.js 24 and the default npm installation. Run a Preview deployment for the reviewed commit. Keep checkout disabled while reviewing the site. For a CLI preview in a linked checkout, run `vercel deploy`. See [LAUNCH_BLOCKERS.md](LAUNCH_BLOCKERS.md) before publishing sales or connecting the production domain.
