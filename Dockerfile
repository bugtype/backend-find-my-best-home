FROM node:12.13-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
COPY wait-for-it.sh /

RUN npm run build

EXPOSE 3000

CMD ["./wait-for-it.sh", "house-database:3306", "--","node", "dist/main"]