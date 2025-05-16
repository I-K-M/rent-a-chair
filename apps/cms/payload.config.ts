import { buildConfig } from 'payload/config'
import path from 'path'

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: 'users',
    bundler: 'webpack',
  },
  collections: [],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  upload: {
    limits: {
      fileSize: 5000000, // 5MB
    },
  },
  db: {
    mongoURL: process.env.MONGODB_URI || 'mongodb://localhost/payload-cms',
  },
})