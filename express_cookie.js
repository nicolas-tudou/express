const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/login_test.html')
}).listen(3000, () => {
    console.log('server start')
})

app.post('/login', (req, res) => {
    
})



