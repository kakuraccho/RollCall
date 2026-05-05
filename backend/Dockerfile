# ベース用
FROM golang:1.25-alpine AS base
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download

# 開発用
FROM base AS dev
RUN go install github.com/air-verse/air@latest
COPY . .
CMD echo "this is development environment." && air -c .air.toml

# ビルド用
FROM base AS builder
COPY . .
RUN go build -o main .

# 実行用
FROM alpine:latest
WORKDIR /root/
COPY --from=builder /app/main .
CMD echo "this is production environment" && ./main
