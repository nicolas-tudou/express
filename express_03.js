const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const multer  = require('multer');
 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/upload/'}).array('image'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/upload_test.html');
})
app.post('/upload', (req, res) => {
    console.log(req.files[0])
    res.send('OK')
})

app.listen(3000, () => {
    console.log('server start')
})