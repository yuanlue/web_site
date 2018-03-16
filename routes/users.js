const router = require('koa-router')()

router.prefix('/users')
router.post('/exit', function (ctx, next) {
     if(ctx.session['user']){
     	ctx.session['user'] = 0
     	ctx.body = {
     		code:200,
     		success:true
     	}
     }
     else{
     	ctx.body = {
     		code:500,
     		success:false
     	}
     }
})

module.exports = router
