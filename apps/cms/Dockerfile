FROM node:22-alpine
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.28.1 --activate
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build && mkdir -p /app/.next && chown -R node:node /app
ENV NODE_ENV=production
USER node
EXPOSE 3000
CMD ["pnpm", "start"]
