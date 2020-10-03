FROM node

WORKDIR /sa/practica_8

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD [ "node", "index.js" ]