FROM node:13.0.1-alpine as build-environment

WORKDIR /app
COPY . ./

RUN npm install

RUN npm run build

FROM nginx:1.17.5-alpine

COPY --from=build-environment /app/dist/ /usr/share/nginx/html

EXPOSE 80
