FROM node:25.1.0-bullseye-slim AS build
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm ci --only=production

FROM node:25.1.0-bullseye-slim
COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node ./src /usr/src/app/src

ENV NODE_ENV=production

EXPOSE 8080

CMD ["dumb-init", "node", "--disable-sigusr1" ,"src/server.js"]
