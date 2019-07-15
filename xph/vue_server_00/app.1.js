//app.js node.js 服务器
//1:第三方模块 
//  express          web服务器
//  cors             跨域
//  express-session  session
//  body-parser      处理post数据
//  multer           上传文件
//  fs               文件操作(内置)
//  mysql            mysql驱动模块 
//下载指令:联网 
//npm i express-session body-parser //multer mysql express cors
//1:引入二个模块  express mysql
const express = require("express");
const mysql = require("mysql");
//2:创建连接池
var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  port:3306,
  database:"xph",
  connectionLimit:15
})
//3:创建express对象
var server = express();
//4:指定静态目录(托管静态资源)
server.use(express.static("public"));
//5.处理跨 域请求
const cors=require("cors");
server.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true
})); 

//6.引入session，添加session功能
const session=require("express-session");
server.use(session({
  secret:"128位字符串", //自定义字符串
  resave:true,//每次请求更新数据
  saveUninitialized:true//保存初始化数据
}));

//9:绑定监听端口
server.listen(3000);
//10：接收用户登录请求
//http://127.0.0.1:3000/login?uname=tom&upass=123

//功能一：用户登录
// server.get("/login",(req,res)=>{
//    //1:接收脚手架参数 uname upass
//    var uname = req.query.uname;
//    var upass = req.query.upass;
//    //2:sql
//    //  SELECT id FROM t_login WHERE //uname = ? AND upass = md5(?)
//    var sql =" SELECT id FROM t_login";       sql+=" WHERE uname = ?";
//        sql+=" AND upass = md5(?)";
//    //3:返回结果 
//    //  {code:1,msg:"登录成功"}
//    //  {code:-1,msg:"用户名或密码有误"}
//    pool.query(sql,[uname,upass],(err,result)=>{
//      if(err)throw err;
//      if(result.length==0){
//        res.send({code:-1,msg:"用户名或密码有误"});
//      }else{
//        req.session.uid=result[0].id;
//       //  console.log(1);
//       //  console.log(req.session);
//        res.send({code:1,msg:"登录成功"});
//      }
//    });
// });
//功能二：商品列表 
server.get("/product",(req,res)=>{
  var pno=req.query.pno;
  var ps=req.query.pageSize;
  //默认值
  if(!pno){pno=1;}
  else{ps=4;}
  //sql
  var sql=" SELECT lid,title,price";
  sql+=" FROM xz_laptop";
  sql+=" LIMIT ?,?";
  var offset=(pno-1)*ps;
  ps=parseInt(ps);
  pool.query(sql,[offset,ps],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
});
//http://127.0.0.0:300/cart?uid=1
//功能三:查询指定用户购物车信息88~114
// server.get("/cart",(req,res)=>{
//   //参数
//   var uid = req.session.uid;
//   //sql
//   var sql = "SELECT id,img,uid,price,count FROM xz_cart WHERE uid = ?";
//   pool.query(sql,[uid],(err,result)=>{
//     if(err)throw err;
//     // console.log(1);
//     // console.log(req.session);
//     res.send({code:1,msg:"查询成功",data:result})
//   });
//   //json
// })


//功能四:-删除指定购物车中一个商品
server.get("/del",(req,res)=>{
  //参数:id
  var id = req.query.id;
  //sql:
  var sql = "DELETE FROM xz_cart WHERE id = ?";
  //json
  pool.query(sql,[id],(err,result)=>{
     if(err)throw err;
    // console.log(result);
     res.send({code:1,msg:"删除成功"})
  })
})

//功能五:-删除购物车中所有商品
server.get("/delAll",(req,res)=>{
  var ids=req.query.ids;
  var sql =`DELETE FROM xz_cart WHERE id IN(${ids})`;
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"});
    }else{
      res.send({code:-1,msg:"删除失败"});
    }
  })
})
