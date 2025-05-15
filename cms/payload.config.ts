import * as payload from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import path from 'path';

// Import collections
import Products from './collections/Products';
import Categories from './collections/Categories';
import Users from './collections/Users';
import Media from './collections/Media';

export default {
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',

  // PostgreSQL adapter
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || 'default-connection-string',
    },
  }),

  secret: process.env.PAYLOAD_SECRET || 'default-secret',

  admin: {
    user: 'users',
  },

  collections: [Products, Categories, Users, Media],
};
