const mysql_cline = require('../dataBase/mysql_config.js')
class workController{
	constructor() {
   		this.name = "workController"
  	}
  	async getWorkCate(){
  		let result = await mysql_cline.query('select * from admin_workCate;',[])
  		console.log(result)
  		return result
  	}
	
}
module.exports = workController