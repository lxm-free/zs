//使用express构建web服务器 
const express = require('express');
const bodyParser = require('body-parser');
/*引入路由模块*/
const cors=require("cors");
const details=require("./routes/details.js");
const userRouter=require('./routes/user.js');
//创建web服务器 托管静态资源到public下 使用中间件
var app=express();
app.listen(3000);
//统一伪装跨域，之后不用再res.writeHead
app.use(cors({
  origin:["http://127.0.0.1:5500"]
}))
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));


/*使用路由器来管理路由*/
app.use("/details",details);
app.use( '/user',userRouter );

