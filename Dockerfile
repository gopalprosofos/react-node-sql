FROM node:14.17.3
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install cors
COPY . /app
CMD node app.js
EXPOSE 3000
