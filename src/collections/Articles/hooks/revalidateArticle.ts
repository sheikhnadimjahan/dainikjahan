import type { AfterChangeHook, AfterDeleteHook } from 'payload'

export const revalidateArticle: AfterChangeHook = async ({ doc, req }) => {
  if (doc.slug && doc._status === 'published') {
    try {
      const revalidateUrl = `${req.headers.origin || process.env.PAYLOAD_SERVER_URL || 'http://localhost:3000'}/api/revalidate?secret=${process.env.REVALIDATE_SECRET || 'development'}&tag=articles-${doc.slug}`
      
      // Attempt to revalidate the article page on the frontend
      await fetch(revalidateUrl).catch(() => {
        // Silently fail if revalidation endpoint is not available
      })
    } catch (error) {
      console.error('Failed to revalidate article:', error)
    }
  }
  return doc
}

export const revalidateDelete: AfterDeleteHook = async ({ doc, req }) => {
  if (doc.slug) {
    try {
      const revalidateUrl = `${req.headers.origin || process.env.PAYLOAD_SERVER_URL || 'http://localhost:3000'}/api/revalidate?secret=${process.env.REVALIDATE_SECRET || 'development'}&tag=articles`
      
      // Attempt to revalidate after deletion
      await fetch(revalidateUrl).catch(() => {
        // Silently fail if revalidation endpoint is not available
      })
    } catch (error) {
      console.error('Failed to revalidate after article deletion:', error)
    }
  }
  return doc
}
