FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 80

CMD [ "npm", "start" ]