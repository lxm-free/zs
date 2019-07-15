import Vue from 'vue' 
import Router from 'vue-router'

// import Home2 from "./components/weixin/Home.vue"
// import MessageList from "./components/weixin/common/MessageList.vue"
// import Login from "./components/xz/Login.vue"
// import product from "./components/xz/product.vue"
// import XZHome from "./components/xz/Home.vue"
// import Cart from "./components/xz/common/Cart.vue"
//项目
// import Home from "./components/xph/Home.vue"
import xphHome from './components/xph/xphHome.vue'
import tgProduct from "./components/xph/tgProduct.vue"
import productInfo from "./components/xph/productInfo.vue"
import login from './components/xph/login.vue'
import cart from './components/xph/cart.vue'
Vue.use(Router) 

export default new Router({
  routes: [
    // {path:"/",component:Home},
    {path:"/",component:xphHome},
    {path:"/tgProduct",component:tgProduct},
    {path:"/productInfo",component:productInfo},
    {path:"/login",component:login},
    {path:"/cart",component:cart}
    // {path:"/Cart",component:Cart},
    // {path:"/XZHome",component:XZHome},
    // {path:"/",redirect:"/XZHome"},//根路径重定向（即设置根路径为XZHome.vue页面）
    // {path:'/',component:HelloContainer},//设置根路径为HelloContainer.vue页面
    // {path:"/product",component:product},
    // {path:"/Login",component:Login},  
  
    // {path:"/login",component:login},
    // {path:"/MyField_taobao05",component:MyField_taobao05},

  ]
})
