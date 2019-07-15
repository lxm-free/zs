<template>
   <div>
        <div  class="swipe-wrapper">
            <button class="back" v-on:click="back">&lt</button>
            <router-link to="/cart">
                <span class="icon iconfont icon-shangpinxiangqing"></span>
            </router-link>
            <mt-swipe :auto="4000" style="height:7rem;">
                <mt-swipe-item v-for="(item,index) in pics" :key="index"><img :src="'http://127.0.0.1:3000/'+item.img"></mt-swipe-item>
                <!-- <mt-swipe-item><img src="../../assets/1/yy1.jpg"></mt-swipe-item>
                <mt-swipe-item><img src="../../assets/1/yy3.jpg"></mt-swipe-item>  -->
            </mt-swipe>
            <div class="title">
                <span class="tit1">{{product.title1}}</span>
                <span class="tit2">￥{{product.price}}</span>
                <div style="color:#888;">
                    <span style="margin-right:3%;">库存：{{product.count}}</span>
                    <span>运费：包邮</span>
                </div>  
            </div>
            <div class="deldel">
                <div class="line"></div>
                <span class="titleImg iconfont icon-figure"></span> 
                
                <span>详情</span> 
                <div class="line2"></div>       
            </div>
            <div class="goods-detail-section">
                <div style="padding:3% 5%;border-bottom:1px solid #888">产品详情</div>
                <div style="height:20px;"></div>
                <div class="goods-details" >
                    <img :src="'http://127.0.0.1:3000/'+item1.img" v-for="(item1,index) in dtlpics" :key="index">
                </div>
            </div>
            <div class="tab">
                <div class="left1">
                    <router-link to="/cart">
                        <span class="icon1 iconfont icon-gouwuche"></span>
                        <p>购物车</p>  
                    </router-link>
                </div>
                <div class="left2">
                    <p @click="cart">加入购车</p>
                </div>
                <div class="left3">
                    <p>立即购买</p>
                </div>
                
            </div>
        </div>
        <div v-show="addboolen" class="addcartmask">
            <div>
                <div class="addcarpro">
                    <div class="leftimg">
                        <div>
                            <img :src="'http://127.0.0.1:3000/'+product.img"   height="80%" width="80%">
                        </div>
                    </div>
                    <div class="righttext">
                        <p>{{product.title1}}</p>
                         <p style="color:red">￥{{product.price}}元<span @click="canceladdcart()">x</span></p> 
                    </div>
                </div>
                <ul>
                    <!--  <li>属性</li>
                    <li class="prospc">主商品</li> -->
                    <li>数量</li>
                    <li>
                        <div class="procount">
                            <a href="#" @click="reducen()"><i class="icf iconfont icon-minus-square"></i></a>
                            <input type="number" v-model="n">
                            <a href="#" @click="addn()"><i class="icf iconfont icon-plus-square"></i></a>
                        </div>
                    </li>
                </ul>
                <button @click="insertcart()">确认</button>
            </div>
            
        </div>

</div> 
</template>
<script>
export default {
    data(){
        return{
            n:0,
            addboolen:false,
            product:{},
            pics:[],
            dtlpics:[]
        }
        
    },
    created(){
    this.proinfo();
    this.load();
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        insertcart(){
            var url="addcart";
            var obj={id:this.product.id,
                    title1:this.product.title1,
                    price:this.product.price,
                    img:this.product.img,
                    count:this.n,
                    };
            this.axios.get(url,{params:obj}).then(result=>{
                var result=result.data;
                if(result.length>0){
                    this.$toast("已有此商品");
                    this.canceladdcart();
                }else{
                    this.$toast("加入成功");
                    this.canceladdcart();
                } 
            })
        }
        ,
        canceladdcart(){
            this.addboolen=false;
        },
        reducen(){
            if(this.n>0)
            this.n--;
        },
        addn(){
            this.n++;
            },
        cart(){
            var uname=localStorage.getItem("uname");
            var uid=localStorage.getItem("uid");
            if(uname!=undefined&&uid!=undefined)
                {this.addboolen=true;}
            else{
                this.$toast("请先登录或注册");
            }
        },
        proinfo(){
            var id=this.$route.query.id;
            var url="details";
            var obj={id:id}
            if(id!=undefined){
                this.axios.get(url,{params:obj}).then(result=>{
                var {product,pics,dtlpics}=result.data;
                    //console.log(result.data);
                    this.product=product;
                    this.pics=pics;
                    this.dtlpics=dtlpics;
                });
            }  
        },
        load(){
           var id=this.$route.query.id;
           var url="product5";
           var obj={id}
           this.axios.get(url,{params:obj}).then(result=>{
            //result.data=>服务器的数据
            var product=result.data;
           })   
       },
        
    }
}
</script>
<style>
body,img{padding:0;line-height: 0}
.swipe-wrapper .back{position:fixed;top:1%;z-index: 999;background: transparent;border: none;font-size: 0.8rem;opacity: 0.6;}
.mint-swipe-indicators{display: none;}
.mint-swipe-item img{width: 100%;}
.icon{font-size:0.4rem !important;position: absolute;z-index: 999; left:85%;top:1%;color: #fff;background-color: #333;width: 13%;height:1rem;border-radius: 50%;opacity: 0.7;text-align: center;padding-top: 4%;}
.title{background-color: #fff;display: flex;flex-direction: column;line-height: 0.5rem;padding-left: 5%;padding-top:5%;margin-bottom: 5%;}
.title .tit1{color:#333;}
.title .tit2{color:#ff9038;font-size: 0.3rem;}
.deldel{position: relative;}
.line,.line2{border: 1px solid #ccc;width: 15%;margin-top: 3%;position: absolute;left: 27%;display: inline-block;}
.line2{left: 65%;}
.swipe-wrapper .titleImg{position: relative; left:45%;top:20%;line-height: 0.5rem}
.deldel span{position: absolute;left:54%;top:8%;color: #ccc}
.goods-detail-section{background-color: #fff;}
.goods-details{width: 100%;text-align: center;}
.goods-details img{width:80%;vertical-align:bottom;margin-bottom: -1px}
.tab{width: 100%;height: 10%;position: fixed ;top:91%;display: flex;border-top: 1px solid #ccc;}
.left1{width: 20%;background-color: #fff;height: 100%;text-align: center;position: relative;}
.left1 .icon1{font-size:0.4rem;position: absolute;top: 20%;left: 40%}
.left1 p{color: #666;margin-top: 54%;}
.left2,.left3{width: 40%;}
.left2{background-color: #f5a623}
.left2 p,.left3 p{color: #fff;text-align: center;margin-top: 16%;font-size: 0.35rem}
.left3{background-color: #ff9038;}

.icf{font-size:0.8rem!important;margin-bottom: 0.2rem!important;}
.addcartmask{
    position: fixed;
    z-index: 1000;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    overflow: hidden;
}
.addcartmask>div{
    background-color: aliceblue;
    width: 100%;
    height: 21em;
    position: absolute;
    bottom: 0;
}
.addcartmask ul{
    padding: 1em;
}
.addcartmask ul li{
    font-size: 1.2em;
    height: 3em;
    line-height: 3em;
}
.procount{
    display:flex;
    justify-content: left;
    align-items: center;
    font-size: 2em;
}
.procount input{
    width: 1em;
    text-align: center;
    outline: none;

}
.addcarpro{
    width: 100%;
    height: 9em;
    display: flex;
    border-bottom: 1px solid #999;
}
.addcarpro .leftimg{
    width: 45%;

}

.leftimg div{
    padding: 1em 0em 0.5em 0em;
    text-align: center;
    position: relative;
    top: -1.5em;
    left: 0.5em;
    border-radius: 0.3em;
    background-color: aliceblue;
}
.addcarpro .righttext{
    width: 55%;
    padding-left: 0.5em;
    padding-top: 1em;
    padding-right: 0.3em;
    overflow: hidden;
}
.addcarpro .righttext p{
    height: 4.5em;
}
.righttext span{
    display: inline-block;
    border-radius: 50%;
    border: 1px solid #999;
    width: 1.5em;
    height: 1.5em;
    color: #999;
    text-align: center;
    line-height: 1.3em;
    font-size: 1.5em;
    position: relative;
    top:-130%;
    right:-56%;
}
.prospc{
    width: 20%;
    height: 2.5em;
    line-height: 2.5em;
    border-radius: 0.5em;
    text-align: center;
    background-color: #E63D59;
    color: aliceblue;
}
.addcartmask button{
    width: 100%;
    height: 2.5em;
    font-size: 1.2em;
    background-color: #E63D59;
    position: fixed;
    bottom: 0;
    color: aliceblue;
    outline: none;
}
</style>
