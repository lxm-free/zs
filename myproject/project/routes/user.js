//引入express
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//用户注册
router.post("/regist",(req,res)=>{
  var uname=req.body.uname;
  var upwd=req.body.upwd;
  var sql="INSERT INTO guogool_login SET ?"
});
//用户登录
router.get("/login",(req,res)=>{
   //1:接收脚手架参数 uname upass
   var uname = req.query.uname;
   var upass = req.query.upass;
   //2:sql
   //  SELECT id FROM t_login WHERE //uname = ? AND upass = md5(?)
   var sql =" SELECT id FROM guogool_login";
   sql+=" WHERE uname = ?";
   sql+=" AND upwd = ?";
   //3:返回结果 
   //  {code:1,msg:"登录成功"}
   //  {code:-1,msg:"用户名或密码有误"}
   pool.query(sql,[uname,upwd],(err,result)=>{
	   console.log(result);
     if(err)throw err;
     if(result.length==0){
       res.send({code:-1,msg:"用户名或密码有误"});
     }else{
       req.session.uid=result[0].id;
       res.send({code:1,msg:"登录成功"});
     }
   });
});


//导出路由器
module.exports=router;