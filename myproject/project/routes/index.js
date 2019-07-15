const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
  var sql="select * from xz_index_product where seq_recommended != 0 order by seq_recommended";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
  })
})
router.get("/select",(req,res)=>{
  var sql="select * from guogool_product_details";
  pool.query(sql,(err,result)=>{
    res.send(result);
  })
})
module.exports=router;