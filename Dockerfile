FROM node:14
WORKDIR /usr/src/api
COPY ./package.json .
RUN yarn install --only=prod