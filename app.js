const express = require('express');
const tools = require("./tools");
const history = require('connect-history-api-fallback');
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.use(history());
app.post('/upload',tools.upload().single('avatar'),(req,res)=>{
    res.send({  // 给前端返回的数据
        file: req.file,
    });
})

module.exports = app;
