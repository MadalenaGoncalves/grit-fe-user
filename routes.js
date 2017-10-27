const nextRoutes = require('next-routes');
const routes = nextRoutes();

// API:
//  routes.add(name, pattern = /name, page = name)   ex: .add('user', '/user/:id', 'profile') ; .add('blog', '/blog/:slug')
//  routes.add(pattern, page)   ex: .add('/:noname/:lang(en|es)/:wow+', 'complex')
//  routes.add(object)   ex: .add({name: 'beta', pattern: '/v3', page: 'v3'})

routes
.add({ name:'home',    pattern: '/:lng(en|de)?',        page: 'index' })
.add({ name:'signup',  pattern: '/:lng(en|de)?/signup', page: 'signup' })
.add({ name:'login',   pattern: '/:lng(de|en)?/login',  page: 'login' })
.add({ name:'user',    pattern: '/:lng(de|en)?/user',   page: 'user' })
.add({ name:'workout', pattern: '/:lng(de|en)?/wokout', page: 'workout' })
// .add({ name:'home',    pattern: '/',        page: 'index' })
// .add({ name:'signup',  pattern: '/signup', page: 'signup' })
// .add({ name:'login',   pattern: '/login',  page: 'login' })
// .add({ name:'user',    pattern: '/user',   page: 'user' })
// .add({ name:'workout', pattern: '/wokout', page: 'workout' })


module.exports = routes;
