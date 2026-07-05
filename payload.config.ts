import path from 'path'
import { buildConfig } from 'payload/config'
import { MongoDBAdapter } from '@payloadcms/db-mongodb'
import payloadSEO from '@payloadcms/plugin-seo'

import { Articles } from './src/collections/Articles'
import { Roles } from './src/collections/Roles'
import { Advertisements } from './src/collections/Advertisements'
import { EmailInbox } from './src/collections/EmailInbox'
import { RSSFeeds } from './src/collections/RSSFeeds'

import { Users } from './src/collections/Users'
import { Categories } from './src/collections/Categories'
import { Media } from './src/collections/Media'

const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGO_URL || 'mongodb://localhost:27017/dainikjahan'
const SERVER_URL = process.env.PAYLOAD_SERVER_URL || process.env.SERVER_URL || 'http://localhost:3000'

export default buildConfig({
  serverURL: SERVER_URL,
  mongoURL: MONGODB_URI,
  admin: {
    user: 'users',
  },
  collections: [
    Articles,
    Roles,
    Advertisements,
    EmailInbox,
    RSSFeeds,
    Users,
    Categories,
    Media,
  ],
  plugins: [payloadSEO()],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  upload: {
    staticDir: path.resolve(__dirname, 'public'),
    imageSizes: [
      {
        name: 'card',
        width: 1200,
        height: 630,
      },
    ],
  },
  db: {
    adapter: MongoDBAdapter,
  } as any,
})
