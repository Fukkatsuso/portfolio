# portfolio

[![Deploy](https://github.com/Fukkatsuso/portfolio/workflows/Deploy/badge.svg)](https://github.com/Fukkatsuso/portfolio/actions?query=workflow%3ADeploy)

GitHub PagesでホスティングしているVue.js製のポートフォリオサイト

## Project setup

```sh
docker-compose build
```

## Compiles and hot-reloads for development

```sh
docker-compose up
```

## Compiles and minifies for production

```sh
docker-compose run --rm web npm run build
```

## Run your tests

```sh
docker-compose run --rm web npm run test
```

## Lints and fixes files

```sh
docker-compose run --rm web npm run lint
```

## Deploy to GitHub Pages

only have to do is `git push origin {branch}`!