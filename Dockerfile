FROM golang:1.25.0 AS builder

WORKDIR /app
COPY go.mod ./

ENV CGO_ENABLED=0
RUN go mod download

COPY . .
RUN go build -o server main.go

FROM gcr.io/distroless/static-debian12:nonroot
COPY --from=builder /app/server /

CMD ["/server"]

USER nonroot