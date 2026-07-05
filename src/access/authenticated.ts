import type { Access } from 'payload'

export const authenticated: Access = ({ req }) => {
  return !!req.user
}
