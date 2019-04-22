const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(cors()); //解决跨域
app.use(bodyParser.json()); //json请求
app.use(bodyParser.urlencoded({extended: false})); //表单请求

app.listen(3000, () => {
	console.log('服务启动成功');
});

let login = true;
app.all('*', (req, res, next) => {
	if(!login){
		res.json('未登录');
	};
	next();
});

//？后面的表单参数会放到req.query里，路径上的参数会放到req.params里，json参数会放到req.body里
app.post('/login', (req, res) => {
	console.log(req.query);
	console.log(req.params)
	console.log(req.body)
	res.json({"code": 0});
});
