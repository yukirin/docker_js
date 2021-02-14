FROM nginx:stable-alpine

RUN apk update
RUN apk --no-cache add git

RUN apk --no-cache add nodejs npm
RUN npm config set depth 0