<template>
    <div>
        <router-link  to="/"><div class="back"><mt-button icon="back"></mt-button></div></router-link>   
        <div class="con-top">
            <span>登录 / 注册</span>
        </div>
        <div class="mt">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" v-model="upass" type="password"></mt-field>
            <!-- <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="tel"  v-show="isShow"   @click="rig" ></mt-field> -->
            <span v-show="isShow" style="position:absolute;top:75%;left:3%;">手机号</span>  <input style="width:65%;margin-left:32%;" @blur="rig" type="text" v-model="tel" placeholder="请输入手机号" v-show="isShow">
        </div>
        <div style="width:100%;text-align:center;">
           <div class="mt-bt">
                <mt-button type="primary" size="large" class="mt-size" @click="login">登录</mt-button>
                <mt-button size="large" class="mt-size2" plain @click="showToggle">注册</mt-button>     
           </div>  
        </div> 
    </div>
</template>
<script>
export default {
    data(){
        return{
            uname:'',
            upass:'',
            isShow:'',
            tel:''
        }
    },

    methods:{
        rig(){
            var tel=this.tel
            var obj={utel:tel}
            var url="phone"; 
            this.axios.get(url,{params:obj}).then(result=>{
                //console.log(result)
                if(result.data.length<1){
                return;
                }else{
                this.$toast("该手机号已注册");
                this.tel="";
                return;
                }
            }) 
        },

        login(){
           //1.获取用户输入用户名
           //2.获取用户登录密码
            var n=this.uname;
            var p=this.upass;
           //3.创建两个正则表达式/^\d{3,10}$/
            var nreg=/^[a-zA-Z0-9]{3,10}$/;//创建验证用户名的正在表达式
            var preg=/^[a-zA-Z0-9]{3,8}$/;//创建验证密码的正在表达式
          //4.判断用户名格式是否正确
           if(!nreg.test(n)){
               this.$toast("用户名格式不正确<由3-10位字母、数字组成>");
               return;
           }
          //5.判断密码格式是否正确
         if(!preg.test(p)){
             this.$toast("密码格式不正确<由3-8位字母、数字组成>");
             return;
         }
          //6.将用户名和密码发送ajax请求
          var url="login";
          var obj={uname:n,upass:p};
          //7.并获取服务器返回结果
          this.axios.get(url,{params:obj}).then(result=>{
           if(result.data.code==1){
               localStorage.setItem("uid",result.data.uid);//1  //uid
               localStorage.setItem("uname",result.data.uname);
                  //console.log(result.data.uid)
               this.$messagebox("消息",result.data.msg);
            //    localStorage.setItem("upass",result.data.upass);
             //9.返回成功 跳转到Home.vue
            this.$router.push("/");
           }else{//8.返回失败
             this.$messagebox("消息",result.data.msg);
           }
          }); 
        },
        showToggle(){
            this.isShow = true;
            var n=this.uname;
            var p=this.upass;
            var tel=this.tel;
            var nreg=/^[a-zA-Z0-9]{3,10}$/;//创建验证用户名的正则表达式
            var preg=/^[a-zA-Z0-9]{3,8}$/;//创建验证密码的正则表达式
            var telreg=/^1[3-8][0-9]{9}$/;//创建验证手机号的正则表达式
            //判断用户名格式是否正确
            if(!nreg.test(n)){
               this.$toast("用户名格式不正确<由3-10位字母、数字组成>");
               return;
           }
           //判断密码格式是否正确
            if(!preg.test(p)){
                this.$toast("密码格式不正确<由3-8位字母、数字组成>");
                return;
            }
            if(tel==""){
                this.$toast("手机号码不能为空");
                return;
            }
            if(!telreg.test(tel)){
                this.$toast("手机号码格式不正确");
                return;
            }
            var url="regist";
            var obj={uname:n,upass:p,utel:tel}
            //console.log(obj);
            this.axios.get(url,{params:obj}).then(result=>{ 
                var phone=result.data;
            if(result.data.code==4&&tel!=phone.utel){
                //返回成功 跳转到Home.vue
                this.$router.push("/login");
                alert("注册成功");
            }else{//返回失败
             //console.log(result);
                 this.$toast("该手机号已注册");
            //    this.$messagebox("消息",result.data.msg);
            } 
        });  
        },
    }
}
</script>
<style>
/* .mint-button--primary{background-color: #ff458e!important} */
.back{position: absolute;left:3%;top:1.5%;z-index: 999;}
.back button{background: transparent;border: none;color: #fff;font-size: 0.5rem;}
.con-top{width:100%;height: 1.4rem;position: absolute;background-color: #26a2FF;top:0%;text-align:center;color: #fff;line-height: 1.4rem}
.mt{position: absolute;top:18%;left: 6%;}
.mint-cell-value{padding-top: 2%!important}
.mt-bt{position:relative;line-height: 0.3rem}
.mt-size,.mt-size2{width:70%!important;margin-left: 16%;}
.mt-size{margin-top: 85%;}
.mt-size2{margin-top: 3%;}
</style>
