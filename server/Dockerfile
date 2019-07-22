FROM node:alpine

WORKDIR /node-app

COPY package.json ./

RUN apk add --no-cache python build-base # build base includes g++ and gcc and Make

RUN npm install

RUN npm install nodemon -g

COPY . .

EXPOSE 9000

CMD ["npm", "start"]