FROM node:12.2.0 AS build

WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

RUN npm run build --aot

FROM nginx:alpine
COPY /nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/sample /usr/share/nginx/html
EXPOSE 80