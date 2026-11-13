FROM node:22-alpine
WORKDIR /app
COPY package.json ./
# apps/web has no local npm lockfile: keep npm install until a lockfile is generated and committed.
RUN npm install --no-audit --no-fund
COPY . .
RUN npm run build && mkdir -p /app/.next && chown -R node:node /app
ENV NODE_ENV=production
USER node
EXPOSE 3000
CMD ["npm", "start"]
