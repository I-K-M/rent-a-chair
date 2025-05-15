# Étape 1 : Build
FROM node:20 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Serveur de production
FROM node:20-slim

WORKDIR /app
COPY --from=builder /app /app

# Install production dependencies
RUN npm install --only=production

ENV PAYLOAD_CONFIG_PATH=/app/payload.config.ts
ENV PAYLOAD_SECRET=supersecretvalue
ENV DATABASE_URI=postgres://postgres:postgres@postgres:5432/rent_a_chair

EXPOSE 3000

CMD ["npm", "start"]
