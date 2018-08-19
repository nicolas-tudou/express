const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const mysql = require('mysql');
const app = express();

var pool = mysql.createPool({
    host: 'localhost',  
    user: 'root',  
    password: 'root',  
    database: 'test',  
    port: 3306
})
app.use(cookieParser());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/login_test.html')
}).listen(3000, () => {
    console.log('server start')
})

app.post('/login', urlencodedParser, (req, res) => {
    var sql = `select id from person_info where name=? and password=?`
    pool.getConnection((err, connect) => {
        if(err) {
            throw err;
        }else {
            connect.query(sql, [req.body.username, req.body.password], (err, values, fileds) => {
                if(values.length > 0) {
                    res.cookie('userId', values[0].id, {maxAge: 100});
                    res.send('登陆成功');
                }else {
                    res.send('密码错误');
                }
                connect.release();
            })
        }
    })
})



