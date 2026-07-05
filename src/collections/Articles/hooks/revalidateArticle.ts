import { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath } from 'next/cache'

const runRevalidate = async (doc: any) => {
  try {
    await revalidatePath(`/articles/${doc.id}`)
    await revalidatePath(`/`)
  } catch (err) {
    console.error('Revalidation failed', err)
  }
}

export const revalidateArticle: CollectionAfterChangeHook = async ({ doc }) => {
  await runRevalidate(doc)
}

export const revalidateDelete: CollectionAfterDeleteHook = async ({ doc }) => {
  await runRevalidate(doc)
}
