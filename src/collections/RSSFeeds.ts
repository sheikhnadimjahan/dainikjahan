import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const RSSFeeds: CollectionConfig = {
  slug: 'rss-feeds',
  labels: {
    singular: 'RSS Feed',
    plural: 'RSS Feeds',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'feedURL', 'category', 'isActive', 'lastImported'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Feed Name',
    },
    {
      name: 'feedURL',
      type: 'text',
      required: true,
      unique: true,
      label: 'RSS Feed URL',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'autoApprove',
      type: 'checkbox',
      defaultValue: false,
      label: 'Auto-approve imported articles',
    },
    {
      name: 'rewriteWithGemini',
      type: 'checkbox',
      defaultValue: true,
      label: 'Rewrite articles with Gemini AI',
    },
    {
      name: 'lastImported',
      type: 'date',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'importFrequency',
      type: 'select',
      options: [
        { label: 'Every 15 minutes', value: '15' },
        { label: 'Every 30 minutes', value: '30' },
        { label: 'Every hour', value: '60' },
        { label: 'Every 4 hours', value: '240' },
        { label: 'Daily', value: '1440' },
      ],
      defaultValue: '30',
    },
  ],
}
