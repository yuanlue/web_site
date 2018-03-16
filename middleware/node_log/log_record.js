const logUtil = require('../../utils/log_util');

module.exports = app=>{
	app.use(async(ctx,next)=>{
		  const start = new Date();
  			//响应间隔时间
		  let ms;
		  try {
		    //开始进入到下一个中间件
		    await next();

		    ms = new Date() - start;
		    //记录响应日志
		    logUtil.logResponse(ctx, ms);

		  } catch (error) {
		    
		    ms = new Date() - start;
		    //记录异常日志
		    logUtil.logError(ctx, error, ms);
		  }
	})
}