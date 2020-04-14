const express = require('express');
const router = express.Router();

//？后面的表单参数会放到req.query里，路径上的参数会放到req.params里，json参数会放到req.body里

//登录 /user/login
router.post('/login', (req, res, next) => {
	let data = req.body;
	let username = data.username.trim(),
		password = data.password.trim();
	if(!username || !password){
		res.json({"code": 1001, "msg": "用户名或密码错误"});
		return;
	}
	
});

module.exports = router
