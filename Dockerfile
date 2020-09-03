FROM node:12.18.3

WORKDIR /usr/src/app

RUN npm install -g gatsby-cli && gatsby telemetry --disable

COPY package.json .

RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
