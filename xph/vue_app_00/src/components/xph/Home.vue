<template>
    <div class="page-tabbar">
        <div class="page-wrap">
            <titlebar centerTitle="鲜品汇"></titlebar>
        </div>
        <div style="margin-top:48px"></div>
        <!-- 顶部导航栏 -->
        <mt-navbar v-model="selected">
            <mt-tab-item id="home">一起吃吧</mt-tab-item>
            <mt-tab-item id="fruit">水果</mt-tab-item>
            <mt-tab-item id="meat">肉蛋</mt-tab-item>
            <mt-tab-item id="product">水产</mt-tab-item>
        </mt-navbar>
        <div class="page-lb">
            <!-- 轮播图 -->
            <lb :img1="require('../../assets/1/lb1.jpg')" :img2="require('../../assets/1/lb2.jpg')" :img3="require('../../assets/1/lb3.jpg')"></lb>        
        </div>
        <!-- <div style="margin-top:90px;"></div> -->
        <!-- 切换面板 -->
        <mt-tab-container v-model="selected" class="page-tabbar-container">
            <mt-tab-container-item id="home">
                <container :img4="require('../../assets/1/xrzx.png')" :img5="require('../../assets/1/jfsc.png')" :img6="require('../../assets/1/jrxp.png')"  txt="新人专享" txt2="积分商城" txt3="今日新品"></container>
            </mt-tab-container-item>
            <mt-tab-container-item id="fruit">
                <container2></container2> 
            </mt-tab-container-item>
            <mt-tab-container-item id="meat">
                <container3></container3> 
            </mt-tab-container-item>
            <mt-tab-container-item id="product">
                <container4></container4> 
            </mt-tab-container-item>
        </mt-tab-container> 
        
    </div>
</template>
<script>
const setHtmlFontSize = () => { const htmlDom = document.getElementsByTagName('html')[0]; let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth; if (htmlWidth >= 750) { htmlWidth = 750; } if (htmlWidth <= 320) { htmlWidth = 320; } htmlDom.style.fontSize = `${htmlWidth / 7.5}px`; }; window.onresize = setHtmlFontSize; setHtmlFontSize();

//引入子组件titleBar.vue
import titleBar from "./common/titleBar"
import lb from "./common/lb.vue"
import container from "./container"
import container2 from "./container2"
import container3 from "./container3"
import container4 from "./container4"
export default {
    data(){
        return{
            selected:"home",
            //创建数组保留照片的焦点状态
            currentIndex:[
                {isSelect:true},
                {isSelect:false},
                {isSelect:false},
                {isSelect:false}
                ]
        }
        
    },
    methods:{
  
    },
    components:{
        //注册子组件
        "titlebar":titleBar,
        "container":container,
        "lb":lb,
        "container2":container2,
        "container3":container3,
        "container4":container4,
    }
}
</script>
<style>
.mint-tab-item-label{color: #333 !important;font-size: 0.3rem !important;} 
.page-tabbar{ overflow: hidden;}
.page-lb{overflow: auto;}
.mint-tab-container-wrap{height: 30%!important;}  

</style>
