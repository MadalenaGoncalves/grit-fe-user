const express = require('express')
const path = require('path')
const next = require('next')
const routes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const routesHandler = routes.getRequestHandler(app)

const i18nextMiddleware = require('i18next-express-middleware')
const Backend = require('i18next-node-fs-backend')
const i18n = require('./i18n')
const readdir = require('readdir');

// const App = require('./pages')

const detectionOptions = {
  // order and from where user language should be detected
  order: ['path', 'session', 'querystring', 'cookie', 'header'],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupSession: 'lng',
  lookupPath: 'lng',
  lookupFromPathIndex: 0,

  // cache user language
  caches: false, // ['cookie']

  // optional expire and domain for set cookie
  // cookieExpirationDate: new Date(),
  // cookieDomain: 'myDomain'
};

// Read all namespaces from locales folder
const namespaces = ['common'];
readdir.read(
  path.join(__dirname, '/pages'),
    function (err, dirList) {
      (dirList.map(filename => {
        if (filename.startsWith('index')) return;
        return namespaces.push(filename.slice(0, -3).toLowerCase())
      }));
    }
);
const i18nOptions = {
  preload: ['de', 'en'], // preload all langages
  // load: 'languageOnly',
  ns: namespaces, // need to preload all the namespaces
  backend: {
    loadPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.json'),
    addPath: path.join(__dirname, '/locales/add/{{lng}}/{{ns}}.missing.json'),
    jsonIndent: 2
  },
  detection: detectionOptions
};

// init i18next with serverside settings
// using i18next-express-middleware
i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init(i18nOptions, () => {
    // loaded translations we can bootstrap our routes
    app.prepare()
      .then(() => {
        const server = express()

        // enable middleware for i18next
        server.use(i18nextMiddleware.handle(i18n))

        // serve locales for client
        server.use('/locales', express.static(path.join(__dirname, '/locales')))
        // missing keys
        server.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18n))

        // multiload backend route
        // server.get('/locales/resources.json', middleware.getResourcesHandler(i18next));

        // server.get('/:lng', (req, res) => {
        //   console.log('********************************************QUERY', req.query);
        //   console.log('********************************************PARAMS', req.params);
        //   const mergedQuery = Object.assign({}, req.query, req.params);
        //   return app.render(req, res, '/', mergedQuery);
        // });
        //
        // server.get('/:lng/signup', (req, res) => {
        //   console.log('********************************************QUERY', req.query);
        //   console.log('********************************************PARAMS', req.params);
        //   const mergedQuery = Object.assign({}, req.query, req.params);
        //   return app.render(req, res, '/signup', mergedQuery);
        // });

        // use next-routes
        server.get('*', (req, res) => {
          // i18nextMiddleware.addRoute(i18next, '/:lng/key-to-translate', ['en', 'de'], server, 'get',
          //   function(req, res) {
              return routesHandler(req, res)
            // }
        })
        // i18nextMiddleware.addRoute(i18next, '/:lng/key-to-translate', ['en', 'de', 'it'], server, 'get',
        //   function(req, res) {
        //   //endpoint function
        //   }
        // );

        server.listen(port, (err) => {
          if (err) throw err
          console.log(`> Ready on http://localhost:${port}`)
        })
      })
  })
