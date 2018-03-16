const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
  	pagename:"home",
    title: '壹问天下科技公司&&app开发&&小程序开发&&一站式解决方案'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
