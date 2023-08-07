# Authentication Flow

Run the services

- minio
- gotrue (supabase)
- galatea-server
- postgres

```
docker compose up -d --build
```

```ts
// Build the client
const transport = createConnectTransport({
  baseUrl: "http://localhost:8080",
  useHttpGet: true,
});
const client = createPromiseClient(AuthService, transport);
// Call signUp on the API
client.signUp({
  email: "test@pygmalion.chat",
  password: "devdev",
});
// Call verify on the API
// Get the token from the SMTP blackhole (mailhog, http://localhost:8025)
client.verify({
  type: "signup",
  email: "test@pygmalion.chat",
  token: "796956",
});
// Call signIn on the API
const resp = await client.signIn({
  email: "test@pygmalion.chat",
  password: "devdev",
});
// Call check on the API
client.check({}, { headers: { Authorization: `Bearer ${resp.accessToken}` } });
```

If successful, your token is valid! Use it for all authenticated requests.
