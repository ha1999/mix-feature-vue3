FROM node:14-alpine as build

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY ./ .
RUN yarn build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build /app/dist /app

RUN mkdir /app_2
COPY --from=build /app/dist /app_2

RUN mkdir /app_3
COPY --from=build /app/dist /app_3

COPY nginx.conf /etc/nginx/nginx.conf