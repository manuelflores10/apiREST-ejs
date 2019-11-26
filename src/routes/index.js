const routes = require('express').Router();

const authorRoutes = require('./author')
const generRoutes = require('./gener')

routes.get('/',(req, res)=>{
  res.render('../views/index')
})

routes.use('/author', authorRoutes)
routes.use('/gener', generRoutes)


module.exports = routes;

