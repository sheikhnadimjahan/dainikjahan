# দৈনিক জাহান (Dainik Jahan)

AI-powered Bengali newspaper CMS built with Payload CMS, Next.js, and Gemini API.

## Features

- ✅ Advanced article management with editorial workflow
- ✅ Gmail email ingestion for news submissions
- ✅ RSS feed aggregation with Gemini AI rewriting
- ✅ Role-based access control
- ✅ Real-time SEO optimization
- ✅ Google News XML sitemap
- ✅ Multi-category support
- ✅ Featured article management
- ✅ Advertisement management
- ✅ Bengali language support

## Environment Variables

Create a `.env.local` file:

```
DATABASE_URL=mongodb://localhost/dainik-jahan
PAYLOAD_SECRET=your_secret_here
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
CRON_SECRET=your_cron_secret
PREVIEW_SECRET=your_preview_secret
GEMINI_API_KEY=your_gemini_api_key
GMAIL_CLIENT_ID=your_gmail_client_id
GMAIL_CLIENT_SECRET=your_gmail_client_secret
GMAIL_REFRESH_TOKEN=your_gmail_refresh_token
```

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

Deploy to Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy

## License

MIT
