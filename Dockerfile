# Stage 1
FROM node:10-alpine as build-client
WORKDIR /app

# Install dependencies first to create cached layer
COPY package.json .
COPY yarn.lock .
RUN yarn --production

COPY public/ ./public/
COPY src/ ./src/
COPY tsconfig.json .
RUN yarn build

# Stage 2
FROM node:10-alpine
WORKDIR /app
COPY --from=build-client /app/build ./build
COPY package.json .
COPY inject-env-runtime.sh .

RUN yarn global add serve

RUN chmod +rx ./inject-env-runtime.sh
CMD sh ./inject-env-runtime.sh /app/build/index.html && yarn serve-build
