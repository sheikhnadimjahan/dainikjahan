import type { AfterReadHook } from 'payload'

export const populateAuthors: AfterReadHook = async ({ doc }) => {
  if (!doc) return doc
  
  // If authors relationship is populated, extract and store in populatedAuthors array
  if (doc.authors && Array.isArray(doc.authors)) {
    doc.populatedAuthors = doc.authors.map((author: any) => ({
      id: typeof author === 'string' ? author : author.id,
      name: typeof author === 'object' && author.name ? author.name : '',
    }))
  }
  
  return doc
}
