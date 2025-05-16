FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g @medusajs/medusa-cli
RUN npm install

COPY . .

EXPOSE 9000

CMD sh -c "npm run build && medusa migrations run && medusa develop"