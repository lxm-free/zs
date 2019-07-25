<template>
    <div class="t-container">
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="home">
                <home></home>
            </mt-tab-container-item>
            <mt-tab-container-item id="group_by">
                 <tghome></tghome>
            </mt-tab-container-item>
            <mt-tab-container-item id="me">
                 <mehome></mehome>
            </mt-tab-container-item>
        </mt-tab-container>
        
        <!-- 底部导航栏 -->
        <mt-tabbar v-model="selected" fixed> 
            <mt-tab-item id="home" @click.native="changeState(0)" >
                <tabbaricon  :selectedImage="require('../../assets/1/sy2.png')" :normalImage="require('../../assets/1/sy1.png')"
                :focused="currentIndex[0].isSelect"></tabbaricon> 
                首页
            </mt-tab-item>
            <mt-tab-item id="group_by" @click.native="changeState(1)">
                <tabbaricon  :selectedImage="require('../../assets/1/tg2.png')" :normalImage="require('../../assets/1/tg1.png')"
                :focused="currentIndex[1].isSelect"></tabbaricon>
                团购
            </mt-tab-item>
            <mt-tab-item id="me" @click.native="changeState(2)">
                <tabbaricon  :selectedImage="require('../../assets/1/wd2.png')" :normalImage="require('../../assets/1/wd1.png')" 
                :focused="currentIndex[2].isSelect"></tabbaricon>
                我的
            </mt-tab-item>
    </mt-tabbar>
    </div>
</template>
<script>
const setHtmlFontSize = () => { const htmlDom = document.getElementsByTagName('html')[0]; 
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth; if (htmlWidth >= 750) { htmlWidth = 750; } 
if (htmlWidth <= 320) { htmlWidth = 320; } htmlDom.style.fontSize = `${htmlWidth / 7.5}px`; }; window.onresize = setHtmlFontSize;
setHtmlFontSize();
import tabBarIcon from "./common/tabBarIcon"
import Home from "./Home"
import tgHome from "./tgHome"
import meHome from "./meHome"
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
    },
    //注册子组件
    components:{
        "tabbaricon":tabBarIcon,
        "home":Home,
        "tghome":tgHome,
        "mehome":meHome,
     }
}
</script>
<style>

</style>
