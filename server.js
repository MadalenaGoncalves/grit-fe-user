const express = require('express')
const path = require('path')
const next = require('next')
const routes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = routes.getRequestHandler(app)

const i18nextMiddleware = require('i18next-express-middleware')
const Backend = require('i18next-node-fs-backend')
const i18n = require('./i18n')


// Read all namespaces from locales folder
const readdir = require('readdir');
const namespaces = [];
readdir.read(
  path.join(__dirname, '/locales/en'),
    function (err, dirList) {
      (dirList.map(dirname => namespaces.push(dirname.slice(0, -5).toLowerCase())));
    }
);


// init i18next with serverside settings
// using i18next-express-middleware
i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    preload: ['de', 'en'], // preload all langages
    ns: namespaces, // need to preload all the namespaces
    backend: {
      loadPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.json'),
      addPath: path.join(__dirname, '/locales/missing/{{lng}}/{{ns}}.missing.json')
    }
  }, () => {
    // loaded translations we can bootstrap our routes
    app.prepare()
      .then(() => {
        const server = express()

        // enable middleware for i18next
        server.use(i18nextMiddleware.handle(i18n))

        // serve locales for client
        server.use('/locales', express.static(path.join(__dirname, '/locales')))

        // missing keys
        server.post('/locales/missing/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18n))

        // use next.js
        server.get('*', (req, res) => handle(req, res))

        server.listen(port, (err) => {
          if (err) throw err
          console.log(`> Ready on http://localhost:${port}`)
        })
      })
  })