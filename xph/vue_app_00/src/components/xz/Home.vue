<template>
    <div class="page-tabbar">
        <div class="page-wrap">
            <!--01： 自定义标题子组件 -->
            <titlebar leftTitle="学子商城" :rightFirstImg="require('../../assets/ic_search.png')" :rightSecondImg="require('../../assets/ic_add.png')" :search="mysearch" :add="myadd"></titlebar>
            <!--02： 48像素的占位符 -->
            <div style="margin-top:48px;"></div>
            <!--03： 切换面板 -->
            <mt-tab-container v-model="selected" class="page-tabbar-container">
                <mt-tab-container-item id="product">
                    <product></product>
                </mt-tab-container-item>
                <mt-tab-container-item id="cart">
                    <cart></cart>
                </mt-tab-container-item>
            </mt-tab-container>
            <!--04： 底部导航栏 -->
            <mt-tabbar v-model="selected" fixed>
               <mt-tab-item id="product">
                   商品
               </mt-tab-item>
               <mt-tab-item id="cart">
                   购物车
               </mt-tab-item>
               <mt-tab-item id="me">
                   我的
               </mt-tab-item>
            </mt-tabbar>
        </div>
    </div>
</template>
<script>
//引入子组件TitleBar.vue
import TitleBar from "./common/TitleBar"
//引入子组件product.vue
import product from "./product"
import Cart from "./common/Cart"
export default {
   data(){
       return {
           selected:"product",
       }
   } ,
   components:{//注册子组件
       "titlebar":TitleBar,
       "product":product,
       "cart":Cart
   },
   methods:{
       mysearch(){
        console.log(222);
       },
       myadd(){
           console.log(111);
       }
   }
}
</script>
<style scoped>
    .page-tabbar{
        overflow: hidden;
    }
    .page-wrap{
        overflow: auto;
        padding-bottom: 60px;
    }
</style>
