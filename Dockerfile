FROM node:12.2.0-alpine
RUN mkdir -p /app
WORKDIR /app
COPY ./dist ./
COPY package*.json ./
RUN npm install
CMD [ "node", "app.js" ]
