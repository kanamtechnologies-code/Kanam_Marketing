## Kanam Academy marketing site

This is a **standalone marketing website** built with [Next.js](https://nextjs.org) + Tailwind.

### Customize content

- Edit site name/links/nav in `src/lib/site.ts`
- Home page is `src/app/page.tsx`
- Additional pages:
  - `src/app/pricing/page.tsx`
  - `src/app/about/page.tsx`
  - `src/app/contact/page.tsx`

### Environment variables

This repo reads a few optional environment variables (all are `NEXT_PUBLIC_*`):

- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_INSTAGRAM_URL`
- `NEXT_PUBLIC_LINKEDIN_URL`
- `NEXT_PUBLIC_YOUTUBE_URL`

Copy `env.example` to your local `.env.local` (or set them in your host).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Then edit `src/lib/site.ts` to point the **“Open app”** buttons to your real app URL.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Build note

This project pins the build script to webpack (`next build --webpack`) to avoid Turbopack sandbox limitations in some environments.
