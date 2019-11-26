FROM node:8

RUN mkdir app


COPY . ./app

WORKDIR app

RUN npm install

CMD [ "npm","start"]