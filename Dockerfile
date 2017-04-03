FROM node:6.9.4-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install --only=prod

# Bundle app source
COPY components /usr/src/app
COPY app.js /usr/src/app

CMD [ "npm", "start" ]
