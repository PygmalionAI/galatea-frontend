FROM node:18-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm ci
RUN npm run build

FROM busybox:1.35 AS runner
RUN adduser -D static
USER static
COPY --from=builder /app/dist /home/static/app
WORKDIR /home/static/app
CMD ["busybox", "httpd", "-f", "-v", "-p", "3000"]