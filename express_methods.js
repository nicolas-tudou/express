const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/statics', express.static('src'))
app.get('/', (req, res) => {
    console.log('get home page')
    res.sendFile(__dirname + '/src/login_test.html')
})

//通过post提交数据需要解码
app.post('/login', urlencodedParser, (req, res) => {
    console.log(req.body)
    res.send(`${req.body.username}, you login success, your password is ${req.body.password}`)
})

app.get('/login', (req, res) => {
    console.log(req.query)
    res.send(`${req.query.username}, you login success, your password is ${req.query.password}`)
})

app.listen(3000, () => {
    console.log('server start')
})