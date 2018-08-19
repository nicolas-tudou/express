const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const multer  = require('multer');
 
app.use(express.static('public'));
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/tem');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
var upload = multer({dest: 'src/tem/', storage: storage})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/upload_test.html');
})
app.post('/upload', upload.single('img'), (req, res, next) => {
    fs.readFile(req.file.path, (err, data) => {
        fs.writeFile(__dirname + '/src/img/' + req.file.originalname, data, (err) => {
            if(err) {
                console.log(err);
                return
            }else {
                var response = {
                    message: 'File upload success!',
                    filename: req.file.originalname
                };
                console.log(response);
            }
            // res.send(JSON.stringify(response));
        })
    })
    res.send('OK')
})

app.listen(3000, () => {
    console.log('server start')
})