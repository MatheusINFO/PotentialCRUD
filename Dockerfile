FROM node:14
WORKDIR /usr/src/gazin
COPY ./package.json .
RUN npm install --only=prod