<template>
    <div>
        <titlebar centerTitle="个人中心"></titlebar>
        <!-- <div style="height:"></div> -->
        <div style="height:700px;padding-top:90%;">
            <div class="center">
            <span style="width:100%;">订单中心</span>  
            </div> 
        <div class="linee"></div>
        <div class="info" style="">
            <div class="myorder">
            <span class="iconfont icon-shangpinxiangqing myorderImg"></span>
            <div><p class="md">我的订单</p></div>
        </div>
        <router-link to="/cart"><div class="mycart">
            <span class="iconfont icon-gouwuche mycartImg"></span>
            <div><p class="shopping">购物车</p></div>    
        </div></router-link>
        <div class="vip">
            <span class="iconfont credits icon-icon-test3 myvipImg"></span>
            <div><p class="hy">会员</p></div>
        </div>
        </div>
        </div>
        <div class="top">
 
        </div>
        
        <router-link to="/login">
            <div class="dl" style="" v-show="on" >
                <img src="../../assets/1/default_photo.png" alt=""><span> 请先登录 / 注册 </span> 
            </div>  
            <div class="dl" style="" v-show="!on">
                <img src="../../assets/1/default_photo.png" alt=""><span> {{ccc}} </span> <span style="margin-left:25%;" @click="quit">
                退出</span>
            </div> 
        </router-link>
        
        <div class="bottom">
            <div class="bottom1">
                <img src="../../assets/1/phone.png" alt="">
                <span>0755-666069555</span>    
            </div>
        </div>
      	
    </div>
</template>
<script>
import titleBar from "./common/titleBar"

export default {
    data(){
        return{
            on:false,
            ccc:""
        }
    },
    components:{
        "titlebar":titleBar,
    },
    created(){
        this.isLogin();
        
    },
    methods:{
        isLogin(){
            var uname=localStorage.getItem("uname");
            var uid=localStorage.getItem("uid");
            if(uid!=null){
                this.on=false;
                this.ccc=uname;
            }else{
                this.on=true;
            }
        },
        quit(action){
            // this.$messagebox({
            //     title:"消息",
            //     message:"是否退出登录",
            //     showConfirmButton:true,
            //     showCancelButton:true
            // }).then((action)=>{
                if(action=="confirm"){
                    this.on=true;
                    localStorage.removeItem("uname");
                    localStorage.removeItem("uid");
                    setTimeout(()=>{
                        this.$router.push("/");
                    })
                }
            // })
        }
    }
}
</script>
<style>
.dl{display:flex;}
.dl img,.dl span{width:18%;height: 1.3rem;left: 5%;}
.dl img,.dl span{position: absolute;top:14%;}
.dl span{left:25%;width: 40%;top:17%;color: #fff}
.app-container a{color:#333;} 
body{background-color: #fff!important;}
.top{width: 100%;background:url(../../assets/1/top_bg.jpg) no-repeat;background-size:100% 30%;
height:80%;top:5%;position: absolute;z-index: -1}
/* .top img{width:18%;height: 1.3rem;margin-top: 14%;margin-left: 5%;margin-right: 3%;} */
.top span{color:#fff;font-size: 0.35rem;position: absolute;top:11%;left:30%;}
.center span{position: absolute;top:31%;left: 6%;font-size:0.3rem;color: #59607b}
.linee{border-bottom:1px solid #f4f4f4;width:100%;position: absolute;top:34%;}
.info{display:flex;width: 100%;height: 50px;padding: 0 10%;line-height: 0.6rem}
/* .myorder,.mycart,.vip{color: #59607b;display: inline-block;line-height: 0.7rem;} */
/* .myorder{padding-left: 3%;width: 100%;}
.mycart{padding-left:27%;}
.vip{padding-left:50%;} */
.myorderImg,.mycartImg,.myvipImg{font-size: 0.4rem!important}
.mycartImg,.myvipImg{font-weight: 700}
.myorderImg{padding-left: 30%;}
.mycartImg{padding-left: 22%;background: transparent}
.md{position: absolute;margin-top: -2%;}
.shopping{margin-top: -14%}
.hy{margin-top: -20%}
.bottom{width: 100%;display: flex;top:50%;justify-content: center;}
.bottom1{width:80%;padding:3%;background-color: #ff458e;color: #fff;position: relative;}
.bottom1 span{position: absolute;left:35%;top:35%;}
.bottom1 img{width: 10%;height: 100%;margin-right:8%;margin-left: 10%;}
</style>

