const session = require('koa-session');
const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};
const koasession = async (app)=>{
	app.keys = ['koa_sessions'];
	app.use(session(CONFIG, app));
}
module.exports = koasession