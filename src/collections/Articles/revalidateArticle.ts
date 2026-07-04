import { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath } from 'next/cache'

const revalidateArticle: CollectionAfterChangeHook | CollectionAfterDeleteHook = async ({ doc }) => {
  try {
    await revalidatePath(`/articles/${doc.id}`)
    await revalidatePath(`/`)
  } catch (err) {
    console.error('Revalidation failed', err)
  }
}

export default revalidateArticle
