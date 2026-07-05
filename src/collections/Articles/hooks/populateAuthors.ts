import { FieldHook } from 'payload'

export const populateAuthors: FieldHook = async ({ value, req }) => {
  if (!value) return value
  const users = await req.payload.find({
    collection: 'users',
    where: { id: { in: value } },
  })
  return users.docs
}
