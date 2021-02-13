FROM node:current-alpine

WORKDIR /usr/src/app

RUN apk update
RUN apk --no-cache add git

COPY server_package.json ./package.json
RUN npm install

COPY server.js  ./

EXPOSE 80

CMD ["node", "server.js"]