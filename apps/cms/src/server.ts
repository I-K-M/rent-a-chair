import express from 'express';
import payload from 'payload';
import { resolve } from 'path';

require('dotenv').config();
const app = express();

app.get('/', (_, res) => {
  res.redirect('/admin');
});

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || 'secret-key',
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  app.listen(3001);
};

start();