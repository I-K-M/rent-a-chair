import { buildConfig } from 'payload/config';
import { postgresAdapter } from '@payloadcms/db-postgres';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
  admin: {
    user: 'users',
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  collections: [
    // We'll add collections later
  ],
});