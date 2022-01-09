FROM node:17-alpine
WORKDIR /musical-notes-master
COPY package.json package-lock.json ./
RUN npm i;
COPY . .
CMD ["node", "server.js"]
