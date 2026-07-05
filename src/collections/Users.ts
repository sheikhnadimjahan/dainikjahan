import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { slugField } from 'payload/fields'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'User',
    plural: 'Users',
  },
  auth: true,
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email'],
  },
  access: {
    create: authenticated,
    read: () => true,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'role',
      type: 'relationship',
      relationTo: 'roles',
    },
    slugField(),
  ],
}
