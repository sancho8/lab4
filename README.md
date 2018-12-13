# Lab 4

Для запуску application'a через docker потрібно запустити наступні команди

```sh
  1) docker build -t node-docker 
  2) docker run -d --rm -p 5433:5433 -e POSTGRES_USER=admin -v $(pwd)/sql:/sql --name nd-db postgres:9.6 
  3) docker run --rm -p 3000:3000 -d -v ${pwd}/app/src/app -v ${pwd}/public/src/public --link nd-db --name nd-app node-docker
```

