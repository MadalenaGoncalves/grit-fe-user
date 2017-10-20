const nextRoutes = require('next-routes');
const routes = nextRoutes();
// const routes = module.exports = require('next-routes')()

// API:
//  routes.add(name, pattern = /name, page = name)
//  routes.add(pattern, page)
//  routes.add(object)
//  Arguments:
//   name - Route name
//   pattern - Route pattern (like express, see path-to-regexp)
//   page - Page inside ./pages to be rendered

routes
// .add('/:lng(de|en)', '')
.add('signup'  ,'/signup',  'SignupPage')
.add('login'   ,'/login',   'Login')
.add('profile' ,'/profile', 'ProfilePage')
.add('workout' ,'/wokout',  'EventDetailPage')

// .add('blog', '/blog/:slug')
// .add('user', '/user/:id', 'profile')
// .add('/:noname/:lang(en|es)/:wow+', 'complex')
// .add({name: 'beta', pattern: '/v3', page: 'v3'})


module.exports = routes;
