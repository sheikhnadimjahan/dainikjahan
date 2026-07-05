export const Code = {
  slug: 'code',
  labels: {
    singular: 'Code Block',
    plural: 'Code Blocks',
  },
  fields: [
    {
      name: 'language',
      type: 'text',
      admin: {
        description: 'e.g., javascript, tsx, python',
      },
    },
    {
      name: 'code',
      type: 'textarea',
      admin: {
        description: 'The code content for the block',
      },
    },
  ],
} as any
