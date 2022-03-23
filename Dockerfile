FROM node:lts-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

EXPOSE 8080
