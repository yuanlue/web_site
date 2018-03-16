const mysql_cline = require('../dataBase/mysql_config')
class userController{
	constructor() {
   		this.name = "userController"
  	}
	async loginAuth(uname,pwdkey){
		let result = await mysql_cline.query('select * from admin_user where user_name= ? and pwd_key = md5( ? );',[uname,pwdkey])
		return result
	}
}
module.exports = userController