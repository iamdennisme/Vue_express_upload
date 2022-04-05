const express = require('express');
const tools = require("./tools");
const main = require('connect-history-api-fallback');
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.use(main());
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.post('/upload',tools.upload().single('avatar'),(req,res)=>{
    res.json({ data: '上传成功' })
})

module.exports = app;
