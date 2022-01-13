FROM node:10.15.3-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache git
WORKDIR /app
COPY package.json /app
RUN npm install --production
COPY . /app
CMD [ "npm", "run", "start"]