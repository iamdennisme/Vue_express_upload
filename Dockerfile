FROM node:12.1

WORKDIR /app

COPY ./package.json /app/

RUN npm install

COPY . /app/

EXPOSE 3000

CMD node bin/www 