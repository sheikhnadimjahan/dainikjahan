import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const EmailInbox: CollectionConfig = {
  slug: 'email-inbox',
  labels: {
    singular: 'Email Submission',
    plural: 'Email Submissions',
  },
  access: {
    create: () => true,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'subject',
    defaultColumns: ['subject', 'senderEmail', 'receivedAt', 'status', 'createdDraft'],
  },
  fields: [
    {
      name: 'senderEmail',
      type: 'email',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'senderName',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'body',
      type: 'textarea',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'attachments',
      type: 'array',
      admin: {
        readOnly: true,
      },
      fields: [
        {
          name: 'filename',
          type: 'text',
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Received', value: 'received' },
        { label: 'Processing', value: 'processing' },
        { label: 'Draft Created', value: 'draft_created' },
        { label: 'Published', value: 'published' },
        { label: 'Rejected', value: 'rejected' },
      ],
      defaultValue: 'received',
    },
    {
      name: 'createdDraft',
      type: 'relationship',
      relationTo: 'articles',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Editor Notes',
    },
    {
      name: 'receivedAt',
      type: 'date',
      admin: {
        readOnly: true,
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
  ],
}
