# Authentication Flow

Sign up on the Gotrue server.

```js
const options = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: '{"email":"testuser@pygmalion.chat","password":"flat-shepherddog"}',
};

fetch("http://localhost:8081/signup", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
```

Visit the Mailhog inbox at http://localhost:8025 and check your email for the verification code.

Verify the account on the Gotrue server using the code.

```js
const options = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: '{"type":"signup","email":"testuser@pygmalion.chat","token":"037244"}',
};

fetch("http://localhost:8081/verify", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
```

Sign in on the Gotrue server to retrieve your token.

```js
const options = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: '{"email":"testuser@pygmalion.chat","password":"flat-shepherddog"}',
};

fetch("http://localhost:8081/token?grant_type=password", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
```

Check your token against the galatea-server.

```js
const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTExNjQ1ODQsImlhdCI6MTY5MTE2MDk4NCwic3ViIjoiM2VjM2NkNjMtZWExZi00ZjVkLWI4NzEtMjA3Yjk4MDY5NzI2IiwiZW1haWwiOiJ0ZXN0QHB5Z21hbGlvbi5jaGF0IiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiIiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJvdHAiLCJ0aW1lc3RhbXAiOjE2OTExNjA5ODR9XSwic2Vzc2lvbl9pZCI6ImJmMGRhZDY3LTg1ZGItNDk2My04OGMwLTEwMDBiOWY4NThlNCJ9.32F7n6GwdwSTpcCc0gAkFzhDhTXnMVjI2gyKylLO49M",
  },
};

fetch("http://localhost:8080/api/check", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
```

If successful, your token is valid! Use it for all authenticated requests.
