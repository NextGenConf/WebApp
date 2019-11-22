FROM node:13.0.1-alpine as build-environment

WORKDIR /app
COPY . ./

RUN npm install

RUN npm run build

FROM nginx:1.17.5-alpine

COPY --from=build-environment /app/dist /var/www

COPY config/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
