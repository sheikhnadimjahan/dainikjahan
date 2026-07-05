import type { PayloadRequest } from 'payload'

type Args = {
  slug?: string
  collection: string
  req?: PayloadRequest
}

export const generatePreviewPath = ({ slug, collection, req }: Args): string => {
  const host = (req?.headers?.host as string) || process.env.NEXT_PUBLIC_HOST || 'localhost:3000'
  const proto = (req?.headers?.['x-forwarded-proto'] as string) || (req?.headers?.['x-forwarded-protocol'] as string) || 'http'
  const base = `${proto}://${host}`
  const previewSlug = slug ? `?slug=${encodeURIComponent(slug)}&collection=${encodeURIComponent(collection)}` : `?collection=${encodeURIComponent(collection)}`
  return `${base}/api/preview${previewSlug}`
}
