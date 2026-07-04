import type { CollectionConfig } from 'payload'

export const Roles: CollectionConfig = {
  slug: 'roles',
  labels: {
    singular: 'Role',
    plural: 'Roles',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'permissions',
      type: 'array',
      fields: [
        {
          name: 'action',
          type: 'select',
          options: [
            { label: 'Create Articles', value: 'create_articles' },
            { label: 'Edit Own Articles', value: 'edit_own_articles' },
            { label: 'Edit All Articles', value: 'edit_all_articles' },
            { label: 'Publish Articles', value: 'publish_articles' },
            { label: 'Delete Articles', value: 'delete_articles' },
            { label: 'Access Email Inbox', value: 'access_email_inbox' },
            { label: 'Approve Email Articles', value: 'approve_email_articles' },
            { label: 'Manage RSS Feeds', value: 'manage_rss' },
            { label: 'Manage Ads', value: 'manage_ads' },
            { label: 'View Analytics', value: 'view_analytics' },
            { label: 'Manage Users', value: 'manage_users' },
            { label: 'Access Admin Panel', value: 'access_admin' },
          ],
        },
      ],
    },
  ],
}
