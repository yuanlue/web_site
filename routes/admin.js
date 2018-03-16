const router = require('koa-router')()
const user = require('../controller/userController')
const users = new user()
const svgCaptcha = require("svg-captcha");  
router.prefix('/admin')
router.get('/',async(ctx,next)=>{
	console.log(ctx.session['user'])
		if(ctx.session['user']){
			await ctx.render('admin_index',{name:ctx.session['user']})
		}
		else{
			await ctx.render('login')

		}
	})
router.get('/getCaptcha',async(ctx,next)=>{
	let code = svgCaptcha.create({  
        inverse: false,  
        fontSize: 36,  
        noise: 3,  
        width: 80,  
        height: 30,  
    });  
    ctx.session["randomcode"] = code.text.toLowerCase();  
        ctx.body={
        	status:200,
        	inner:code.data
    }  

})
router.post('/login',
	async(ctx,next)=>{
		//session验证
		console.log(ctx.session["randomcode"])
		if(!ctx.session["randomcode"]||ctx.session["randomcode"]!=ctx.request.body.code){
			ctx.body={
				status:500,
				message:"验证码为空或者验证码不正确",
				success:false
			}
		}
		else{
			await next()

			}
	},async (ctx,next)=>{
		if(!ctx.request.body.uname||!ctx.request.body.pwd){
			ctx.body={
				status:500,
				message:"用户名密码不能为空",
				success:false
			}
		}
		else{
				await next()

		}
	},async (ctx,next)=>{
		let result = await users.loginAuth(ctx.request.body.uname,ctx.request.body.pwd)
		if(result&&result.length>0){
			ctx.session['user'] = ctx.request.body.uname
			
			ctx.body={
				status:200,
				message:"登录成功",
				success:false
			}
			ctx.session["randomcode"]=""
		}
		else{
			ctx.body={
				status:500,
				message:"用户名密码不正确",
				success:false
			}

		}
})

module.exports = router
