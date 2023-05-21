---
sidebar_position: 4
---

# Copilot Integration

Besides making interaction on our website, we will also provide multiple integration approaches for you to integrate a Copilot into your own project or applications.

## Open API

We have already supported Copilot API integration.

### Workflow

1. Create a copilot on [Copilot Hub](https://app.copilothub.ai).
2. Get the API key from **Integration** module of Copilot Dashboard.
3. Make API requests following our API interface.

### API Endpoint

Host: `https://api.copilothub.ai/`

### Q&A with Copilot (Non-Stream)

Route: ** /openapi/v1/query **

Method: ** POST **

** Request **

| Params  | Description      | Extra    |
| ------- | ---------------- | -------- |
| api_key | Copilot API Key  | Required |
| query   | Question content | Required |

** Response **

| Params        | Description                  | Type     |
| ------------- | ---------------------------- | -------- |
| result        | The answer for AI            | string   |
| sources       | Data source                  | string[] |
| quota         | User's remaining quota       | int      |
| default_quota | User's default quota         | int      |
| package_quota | User's package quota         | int      |
| err_code      | Represent the error code.    | int      |
| msg           | Represent the error message. | string   |

### Q&A with Copilot (Stream)

Route: ** /openapi/v1/query/stream **

Method: ** POST **

** Request **

| Params  | Description      | Extra    |
| ------- | ---------------- | -------- |
| api_key | Copilot API Key  | Required |
| query   | Question content | Required |

```
curl -v -N --location --request POST 'https://api.copilothub.ai/openapi/v1/query/stream' \
--header 'Content-Type: application/json' \
--data-raw '{
    "api_key":"XXX",
    "query":"XXX"
}'
```

### Error Code

| HTTP Status Code | Business Error Code | Msg                   |
| ---------------- | ------------------- | --------------------- |
| 400              | 1001                | INVALID_REQUEST       |
| 400              | 1005                | QUOTA_LIMITATION      |
| 500              | 1001                | Server Internal Error |
