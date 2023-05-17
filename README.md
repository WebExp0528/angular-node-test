---
page_type: Production
products:
    - REST-API
languages:
    - typescript
extensions:
    contentType: Production
    technologies:
        - API
    platforms:
        - TS
    createdDate: 05/2023
---

# CivicPlus Custom API

## Prerequisites

- Node.js >= 18.x

## Setup Configuration File

- Copy and fill out the env file

```sh
cp .env.example .env
```

## Run the project 

- Install project dependencies
    `npm install`
- Start dev server
    `npm run dev`
- Build Server for production
    `npm run build`
- Start/Stop prod server (Make sure project needs to be built first before starting)
    `npm start`

## Development

- API Url: <http://localhost:3000>
- Swagger document: <http://localhost:3000/api/guide>

## API Documents and guide

- API basic url: <host-name>/api
- Swagger document: <host-name>/api/guide

## Resources

### Typescript

This project is written using [Typescript](http://www.typescriptlang.org/).

### nodemon for hot-reload in development

### Tsoa

[Tsoa](https://tsoa-community.github.io/docs/getting-started.html) has been used to create api routes.

## Copyright

Copyright (c) 2023 Santiago. All rights reserved.
