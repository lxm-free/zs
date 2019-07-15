<template>
    <div class="container">
        登录的组件
        <div class="tipslogin">
          <span>你需要登录之后才能继续访问</span>
          <span class="closeSpan">关闭</span>
        </div>
        <div class="imgDiv">
            <img src="../../assets/tblogo.png" class="logo" />
        </div>
        <!--操作区域-->
        <div class="operateDiv">         
            <!--账号-->
            <mt-field :placeholder="accountPlaceholder" v-model="uname" class="myinput"></mt-field>
            <!--密码-->
            <mt-field  placeholder="请输入密码" type="password" v-model="upass" class="myinput"></mt-field>
            <!--登录-->
            <div>
                <mt-button size="large" class="mybutton" @click="login">登录</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            accountPlaceholder:"请输入用户名",
            uname:"",
            upass:"",
        }
    },
    methods:{
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
               this.$toast("用户名格式不正确");
               return;
           }
          //5.判断密码格式是否正确
         if(!preg.test(p)){
             this.$toast("密码格式不正确");
             return;
         }
          //6.将用户名和密码发送ajax请求
          var url="login";
          var obj={uname:n,upass:p};
          //7.并获取服务器返回结果
          this.axios.get(url,{params:obj}).then(result=>{
           if(result.data.code==1){
             //9.返回成功 跳转到Home.vue
            this.$router.push("/XZHome");
           }else{//8.返回失败
             this.$messagebox("消息",result.data.msg);
           }
          });
          
          
        }
    }
}
</script>
<style scoped>

     /* 你需要登录才能继续仿问的布局样式 */
    .tipslogin {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 52px;
      background: rgb(238, 238, 238);
      padding-left: 20px;
      padding-right: 20px;
    }
    /* 半闭样式 */
    .closeSpan {
      color: rgb(153, 153, 153)
    }
    /* 图片 logo 根样式 */
    .imgDiv {
      display: flex;
      justify-content: center;
    }
    /* 图片样式 */
    .logo{
      width: 80px;
      height: 80px;
    }
    /* 上面的线隐藏 */
    .mint-cell-wrapper  {
      background-image: linear-gradient(180deg, #fff, #fff 0%, transparent 0%);
    }
   /* 输入框底边框样式 */
    .mint-cell-wrapper  {
      border-bottom: 1px solid #ff5000;
    }

    /* 修改按钮按钮下的默认颜色 */
    .mint-button::after {
      background-color: transparent;
    }
    /* 操作区域的样式*/
    .operateDiv {
      padding-left: 20px;
      padding-right: 20px;
    }
    /* 输入框边距 */
    .myinput {
      margin-top: 30px;
    }
    /* 获取短信验证码字体颜色 */
    .getCode {
      color:#ff5000;
      font-size: 17px;
      border-left:1px solid #b5b5b5;
      padding-left: 7px;
    }
    /* 免费注册根样式 */
    .registerDiv {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    /* 免费注册字体样式*/
    .registerDiv span {
      color: #555;
    }
    /* 登录短信验证按钮边距 */
    .mybutton {
      margin-top: 20px;
    }
    /* 修改默认 butoon 的样式 达到和淘宝登录一样 */
    .mint-button--default {
      background: -webkit-linear-gradient(left,#ff9000,#ff5000) no-repeat;
      border-radius: 25px;
      color: #fff;
      height: 48px;
    }
    /* 同上 */
    .mint-button--primary {
      border-radius: 25px;
      height: 48px;
      background-color: transparent;
      border: 1px solid #ff5000;
      color: #ff5000
    }
    /* 修改默认弹框的样式，达到基本和淘宝的效果一样 */
    .mint-msgbox{
      border-radius: 8px;
      width: 70%
    }
    /* 弹出框内容样式 */
    .mint-msgbox-content {
      min-height: 50px;
      font-size: 18px;
    }
    /* 弹出内容居中 */
    .mint-msgbox-message{
      line-height: 50px;
    }
    /* 弹出框确定按钮样式 */
    .mint-msgbox-btns{
      height: 60px;
    }
    /* 弹出框确定按钮字体 */
    .mint-msgbox-confirm {
      color: #f40;
    }
</style>
