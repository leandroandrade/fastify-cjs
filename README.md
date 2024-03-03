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

## Structure of project

```
.
├── src
│   ├── app.js
│   ├── server.js
│   ├── configs.js
│   ├── business
│   │   ├── decorators
│   │   ├── index.js
│   │   │   └── date.js
│   │   ├── repositories
│   │   │   └── sample-repository.js
│   │   ├── routes
│   │   │   ├── sample
│   │   │   │   ├── index.js
│   │   │   │   └── schema.js
│   │   │   └── schemas-errors.js
│   │   └── swagger
│   │       └── sample-swagger.yaml
│   ├── core
│   │   ├── index.js
│   │   └── plugins
│   │       ├── env.js
│   │       ├── error-handler.js
│   │       ├── not-found.js
│   │       ├── rate-limit.js
│   │       ├── sensible.js
│   │       └── swagger.js
└── tests
    ├── business
    │   ├── decorators
    │   │   └── date.test.js
    │   └── routes
    │       └── sample-controller.test.js
    ├── core
    │   ├── integration
    │   │   ├── root.test.js
    │   │   └── swagger.test.js
    │   └── plugins
    │       ├── error-handler.test.js
    │       └── not-found.test.js
    └── shared
        ├── configs-test.js
        └── helper.js
```

The main idea behind this structure is to separate the main project resources from the business features. The two main folders are:
- **core**: all resources needed for the entire application, main core items of the project. Everything that forms the basis for the entire project.
- **business**: where all business resources will be located, such as routes, decorators, repositories and so on.

I believe this separation makes it easier for beginners to understand the project.

## License

Licensed under [MIT](./LICENSE).
