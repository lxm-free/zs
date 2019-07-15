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

//功能二：商品列表 
server.get("/product",(req,res)=>{
  var sql=" SELECT * FROM  xph_apple";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
});
server.get("/product1",(req,res)=>{
  var sql=" SELECT * FROM  xph_meat";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
});
server.get("/product2",(req,res)=>{
  var sql=" SELECT * FROM  xph_fresh";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
});

server.get("/product3",(req,res)=>{
  var sql=" SELECT * FROM  xph_product"; 
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});

server.get("/product4",(req,res)=>{
  var sql=" SELECT * FROM  xph_product2";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});
//用户登录
server.get("/login",(req,res)=>{
  //接收脚手架中传来的参数uname、upass
  var uname=req.query.uname;
  var upass=req.query.upass;
  var sql="SELECT * FROM xph_login WHERE uname=? AND upass=? ";
  pool.query(sql,[uname,upass],(err,result)=>{
    //console.log(result[0].id);
    if(err) throw err;
    if(result.length==0){
      res.send({code:-1,msg:"用户名或密码不存在,请先注册",data:result});
    }else{
      var uid=result[0].id;
      req.session.uid=result[0].id;
      req.session.uname=result[0].uname;
      //console.log(req.session.uid);
      //req.session.upass=result[0].upass;
      res.send({code:1,msg:"登录成功",uid:uid,uname:uname})
    }
  })
})
//用户注册
server.get('/regist',(req,res)=>{
  var uname=req.query.uname;
  var upass=req.query.upass;
  var utel=req.query.utel;
  if(!uname){
    res.send({code:1,msg:'用户名不能为空'});
	//阻止往后执行
	return;
  }
  if(!upass){
    res.send({code:2,msg:'密码不能为空'});
	return;
  }
  //console.log(req.query.uname);
  if(!utel){
    res.send({code:3,msg:'电话号码不能为空'});
	return;
  }
  var sql1="SELECT * FROM xph_login WHERE utel=?"
  pool.query(sql1,[utel],(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send('手机号已注册'); //no
      return;
    }else{
      var sql="INSERT INTO xph_login SET uname=?,upass=?,utel=?"
      pool.query(sql,[uname,upass,utel],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
          res.send({code:4,msg:'插入成功'});
        } 
      })
    }
  })
 
})
//验证手机号
server.get("/phone",(req,res)=>{
  var utel=req.query.utel;
  var sql="SELECT * FROM xph_login WHERE utel=?"
  pool.query(sql,[utel],(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send(result); //no
      return;
    }else{
      res.send(result);
      return;
    }
  })
})
//
server.get("/details",(req,res)=>{
  var id=req.query.id;
  var output={product:{},pics:[],dtlpics:[]};
  if(id!==undefined){
    var sql1=`select * from xph_proinfo where id=?`;
    pool.query(sql1,[id],(err,result)=>{
      if(err) console.log(err);
        //console.log(result);    
      output.product=result[0];
      
      var sql2=`select * from xph_proimg where id=?`;
      pool.query(sql2,[id],(err,result)=>{
        //console.log(result);
        if(err) console.log(err);   
        output.pics=result; 

        var sql3=`select * from xph_proimg2 where id=?`;
        pool.query(sql3,[id],(err,result)=>{
          if(err) console.log(err);   
          output.dtlpics=result;
          res.send(output);
          //console.log(output)
        })    
      });
    })
  }else{
    res.send(output);
  }
});
server.get("/product5",(req,res)=>{
  var id=req.query.id;
  var sql=" SELECT * FROM  xph_product WHERE id=?";
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});
//加入购物车
server.get("/addcart",(req,res)=>{
    var id=req.query.id;
    var img=req.query.img;
    var title1=req.query.title1;
    var price=req.query.price;
    var count=req.query.count;
    var sql1=`select * from xph_cart where id=?`;
    pool.query(sql1,[id],(err,result)=>{
        if(err) console.log(err);
         //是否重复 
        if(result.length>0){
            res.send(result)
            //console.log(result); 
        }else{
            var sql2=`INSERT INTO xph_cart VALUES (?,?,?,?,?)`;
            pool.query(sql2,[id,img,title1,price,count],(err,result)=>{
                if(err)console.log(err);
                //console.log(result.affectedRows);//.affectedRows
                res.send(result)
            });
        }
    })
})
server.get("/shoppingcart",(req,res)=>{
  // var id=req.query.id;
  var sql=" SELECT * FROM  xph_cart";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});
//删除单条商品
server.get("/delete",(req,res)=>{
  var id = req.query.id;
  console.log(id);
  //sql:
  var sql = "DELETE FROM xph_cart WHERE id = ?";
  //json
  pool.query(sql,[id],(err,result)=>{
     if(err)throw err;
    // console.log(result);
     res.send({code:1,msg:"删除成功"})
})
});