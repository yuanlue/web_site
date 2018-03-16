const router = require('koa-router')()
const works = require('../controller/workCateController')
const work = new works()
router.prefix('/cate')
router.get('/getWorkCate', async (ctx, next)=> {
    let result = await work.getWorkCate()
    ctx.body = {
    	code:200,
    	data:result
    }
})

module.exports = router
