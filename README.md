# Minimal Express Starter Kit

A lightweight starter kit for building server-rendered Node.js apps with Express and EJS.

## What’s included

- **Express** for routing and middleware
- **EJS** for server-side templates
- **Body-parser** for URL-encoded and JSON request payloads
- **Static asset serving** from `public/`
- **Example routes** for pages and API endpoints

## Quick start

Make sure you have [Node.js](https://nodejs.org/) and npm installed.

```sh
git clone git@github.com:tborges/Node-Express-EJS-Template-Body-Parser.git
cd Node-Express-EJS-Template-Body-Parser
npm install
npm start
```

Open `http://localhost:3000`.

## Project structure

```txt
.
├── app.js
├── controllers/
│   ├── apiController.js
│   └── htmlController.js
├── public/
│   ├── img/
│   └── style.css
└── views/
    ├── index.ejs
    └── person.ejs
```

## Available scripts

- `npm start` — runs the app with `node app.js`
- `npm test` — validates JavaScript syntax for core app files

## Notes

This repo is intentionally minimal so you can adapt it quickly for your own app or API.

Licensed under the [MIT License](LICENSE).
