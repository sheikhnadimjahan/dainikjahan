import type { Access } from 'payload'

export const authenticatedOrPublished: Access = ({ req, doc }) => {
  if (req && req.user) return true
  if (doc) {
    if ((doc as any)._status === 'published') return true
    if ((doc as any).publishedAt) return true
  }
  return false
}
