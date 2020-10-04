FROM node:10

WORKDIR /sa/practica_8

COPY package*.json ./

RUN npm install

COPY . .

RUN npm i cors

RUN apt-get update && apt-get install -y postgresql-client

EXPOSE 80

CMD [ "node", "index.js" ]