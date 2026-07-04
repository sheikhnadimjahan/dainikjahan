import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { anyone } from '../access/anyone'

export const Advertisements: CollectionConfig = {
  slug: 'advertisements',
  labels: {
    singular: 'Advertisement',
    plural: 'Advertisements',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'placement', 'isActive', 'startDate', 'endDate'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'placement',
      type: 'select',
      options: [
        { label: 'Header Banner', value: 'header' },
        { label: 'Homepage Hero', value: 'hero' },
        { label: 'Sidebar', value: 'sidebar' },
        { label: 'Article Footer', value: 'article_footer' },
        { label: 'Category Page', value: 'category' },
      ],
      required: true,
    },
    {
      name: 'adImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'adURL',
      type: 'text',
      label: 'Destination URL',
    },
    {
      name: 'altText',
      type: 'text',
      label: 'Alternative Text',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'startDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'endDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
  ],
}
