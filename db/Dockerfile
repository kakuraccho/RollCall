FROM alpine:latest

ARG MIGRATE_VERSION=v4.17.1
RUN apk add --no-cache curl \
    && curl -L https://github.com/golang-migrate/migrate/releases/download/${MIGRATE_VERSION}/migrate.linux-amd64.tar.gz | tar xvz \
    && mv migrate /usr/local/bin/migrate

WORKDIR /migrations
COPY ./migrations .

CMD migrate -path /migrations -database "$DATABASE_URL" up
