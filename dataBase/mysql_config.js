const Client = require("mysql-pro");
const client = new Client({
	mysql:{
		user:"root",
		password:"123",
		database:"yiwen_web",
		host:"localhost"
	}
})

module.exports = client