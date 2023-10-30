# fastify-cjs

Sample boilerplate using fastify with commonjs.

## Get started

Details to configure local environment:

Installing dependencies:

```shell
npm install
```

Configuring .env file

```shell
cp .env.example .env
```

Starting application like development:

```shell
npm run dev
```

Command to run tests:

```shell
npm t
```

Base url to API:
```
http://localhost:3000/api
```

To access the API documentation, you can use the link below:

```
http://localhost:3000/docs
```

## Build Image

Command do build docker image:
```shell
docker build -t leandromandrade/fastify-cjs .
```

## Production

Starting application in production environment:

```shell
docker compose -f docker-compose-production.yml up -d --build
```

Stopping application in production environment:

```shell
docker compose -f docker-compose-production.yml down -v
```

Base url to API:
```
http://localhost:8080/api
```

To access the API documentation, you can use the link below:

```
http://localhost:8080/docs
```

## Requests

All the API requests are available into  ```requests``` directory into root path of project.

## License

Licensed under [MIT](./LICENSE).
