 <template>
     <div class="page-tabbar">
         <div class="page-wrap">
          <!--3.在模块中调用子组件-->
         <titlebar      
             leftTitle="微信(11)"
             :search="mysearch"
             :add="myadd"
             :rightFirstImg="require('../../assets/ic_search.png')"
             :rightSecondImg="require('../../assets/ic_add.png')"
             ></titlebar> 
             <!--div保留标题栏上面的高度-->
             <div style="margin-top:48px"></div>
             <!-- Home.vue入口全局组件-->
             <!-- 切换面板列表-->
             <mt-tab-container class="page-tabbar-container" v-model="active">
                <mt-tab-container-item id="message"> 
                    <messagelist></messagelist>          
                </mt-tab-container-item>  
                  
             </mt-tab-container>
             <!-- tabbar列表-->
             <mt-tabbar v-model="active" fixed>
                 <mt-tab-item id="message" @click.native="changeState(0)">
                     <tabbaricon :selectedImage="require('../../assets/ic_weixin_selected.png')" :normalImage="require('../../assets/ic_weixin_normal.png')" :focused="currentIndex[0].isSelect"></tabbaricon>
                     微信
                 </mt-tab-item>
                 <mt-tab-item id="contact" @click.native="changeState(1)">
                    <tabbaricon :selected-image="require('../../assets/ic_contacts_selected.png')" :normal-image="require('../../assets/ic_contacts_normal.png')" :focused="currentIndex[1].isSelect"></tabbaricon>
                    通讯录
                 </mt-tab-item>
                 <mt-tab-item id="find" @click.native="changeState(2)">
                    <tabbaricon :normal-image="require('../../assets/ic_find_normal.png')" :selected-image="require('../../assets/ic_find_selected.png')" :focused="currentIndex[2].isSelect"></tabbaricon>
                    发现
                 </mt-tab-item>
                 <mt-tab-item id="me" @click.native="changeState(3)">
                     <tabbaricon :normal-image="require('../../assets/ic_me_normal.png')" :selected-image="require('../../assets/ic_me_selected.png')" :focused="currentIndex[3].isSelect"></tabbaricon>
                     我的
                 </mt-tab-item>
             </mt-tabbar>
             

        </div>
     </div>
 </template>
 <script>
 //1.引入TitleBar.vue子组件
 import TitleBar from "./common/TitleBar.vue"
 //引入MessageList子组件
 import MessageList from "./common/MessageList.vue"
 import TabBarIcon from "./common/TabBarIcon.vue"
 export default {
     data(){
         return {
             //面板中显示子组件的id名 
             active:"message",
             //创建数组保留照片的焦点状态
             currentIndex:[
                 {isSelect:true},
                 {isSelect:false},
                 {isSelect:false},
                 {isSelect:false}
                 ]
         }
     },
     //2.注册子组件
     components:{
         "titlebar":TitleBar,
         "messagelist":MessageList,
         "tabbaricon":TabBarIcon
     },
     methods:{
         mysearch(){console.log("搜索")},
         myadd(){console.log("+")},
         changeState(n){
             //创建循环，循环数组中的内容
            for(var i=0;i<this.currentIndex.length;i++){
                //如果循环下标与n相等
                if(n==i){
                    //则当前下标元素的isSelected的值修改为true
                    this.currentIndex[i].isSelect=true;
                }else{
                    //其它元素的isSelecte的值修改为false
                    this.currentIndex[i].isSelect=false;
                }
            }
         }
     }
 }
 </script>
 <style scoped>

 /* 修改tabbar默认文字颜色 */
    .mint-tabbar>.mint-tab-item{
        color: #999999;
       
    }
    /* 修改默认tab选中文字样式 */
    .mint-tabbar>.mint-tab-item.is-selected{
        background-color: transparent;/*设置背景透明*/
        color: #45c018;
        font-size: 30px;
    }
    .page-tabbar{
        overflow: hidden;/*溢出隐藏*/
        
    }
    .page-wrap{
        overflow: auto;/*溢出显示滚动条*/
        padding-bottom: 60px;
    }

 </style>

 