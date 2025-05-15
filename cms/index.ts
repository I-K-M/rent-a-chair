import payload from 'payload';
import express from 'express';
import path from 'path';
import payloadConfig from './payload.config';

require('dotenv').config();

const app = express();

const start = async () => {
  try {
    // ✅ Payload init
    await payload.init({
      config: payloadConfig,
      express: app,
      onInit: () => {
        console.log(`✅ Payload Admin URL: ${payload.getAdminURL()}`);
      },
    });

    // ✅ Middleware static files
    app.use('/media', express.static(path.join(__dirname, '../public/uploads')));

    // ✅ Server start
    app.listen(3001, () => {
      console.log('🚀 Server started on http://localhost:3001/admin');
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

start();

