# portfolio

## Project setup
```sh
$ docker-compose run web npm install
```

### Compiles and hot-reloads for development
```sh
$ docker-compose run web npm run serve
```

### Compiles and minifies for production
```sh
$ docker-compose run web npm run build
```

### Run your tests
```sh
$ docker-compose run web npm run test
```

### Lints and fixes files
```sh
$ docker-compose run web npm run lint
```

## Deploy (Example)
### GitHub Pages
```sh
(dev)$ docker-compose run web npm run build
(dev)$ git add docs/
(dev)$ git commit -m "hoge"
(dev)$ git checkout master
(master)$ git merge dev
(master)$ git push origin master
```