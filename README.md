# OpenAPI 3.1.0, JSON Schema 2020-12 and Node.JS Backend

This repository demonstrates how to use a JSON Schema both in an OpenAPI 3.1.0 document and inside of a Node.JS backend.

The JSON Schema is stored in `replyer.json`. It is included in the `openapi.yaml` via `$ref`. The Express based Node.JS backend validates the input with [Ajv JSON schema validator](https://ajv.js.org/).

## Setup

Install dependencies and run application.

```bash
npm install
node app.js
```

## Sample cURL Requests

```bash
curl \
    -X POST \
    -H "Content-Type: application/json" \
    --data '{ "test": "test" }' \
    http://localhost:8000/welcome
```

## Almost correct request

```bash
curl \
    -X POST \
    -H "Content-Type: application/json" \
    --data '{ "username": "john.doe", "forename": "John", "surname": "Doe", "location": "Gütersloh" }' \
    http://localhost:8000/welcome
```

## Almost correct request

```bash
curl \
    -X POST \
    -H "Content-Type: application/json" \
    --data '{ "username": "j.doe", "forename": "John", "surname": "Doe", "location": "Gütersloh" }' \
    http://localhost:8000/welcome
```
