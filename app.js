const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
require("babel-polyfill");

const logUtil = require('./middleware/node_log/log_record')
const session = require('./middleware/koa-session/session')

const index = require('./routes/index')
const users = require('./routes/users')
const admin = require('./routes/admin')
const cates = require('./routes/cate')

//数据库连接


// error handler
onerror(app)
logUtil(app)

// middlewares
console.log(session)
session(app)
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/static'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(admin.routes(), admin.allowedMethods())
app.use(cates.routes(), cates.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
