const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = require('./routers/index');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'text'
});

connection.connect();

//创建表   ALTER TABLE是修改表
// connection.query(`CREATE TABLE students(
// 	id INT NOT NULL AUTO_INCREMENT,
// 	username VARCHAR(200) NOT NULL,
// 	password VARCHAR(200) NOT NULL,
// 	PRIMARY KEY ( id ))`, 
// 	(err, res) => {
// 		if(err){
// 			console.log(err);
// 		}else{
// 			console.log('创建表成功');
// 		}
// 	}
// )



app.use(cors()); //解决跨域
app.use(bodyParser.json()); //json请求
app.use(bodyParser.urlencoded({extended: false})); //表单请求

router(app);

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


