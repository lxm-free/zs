<template>
    <div>
        <titlebar centerTitle="品牌团"></titlebar>
        
        <div class="top-img">
            <router-link to="/tgProduct"><img src="../../assets/1/tg1.jpg"></router-link>  
        </div>
        <div class="element-container">——   ◆  少点套路，多点食材  ◆ ——</div>
        <div class="top-img1">
            <router-link to="/tgProduct"> <img src="../../assets/1/tg2.jpg"></router-link>
           
        </div>
        <div class="top-img2">
            <router-link to="/tgProduct"><img src="../../assets/1/lb3.jpg"></router-link>
            
        </div>
        <div class="element-container">——   ◆  主菜之前 味蕾上的惊喜  ◆ ——</div>
        <div class="top-img3">
            <router-link to="/tgProduct"> <img src="../../assets/1/tg3.jpg"></router-link>  
        </div>
        <div class="top-img4">
            <router-link to="/tgProduct"> <img src="../../assets/1/lb2.jpg"></router-link>
           
        </div>
    </div>
</template>
<script>
import titleBar from "./common/titleBar"
export default {
    components:{
        "titlebar":titleBar
    },
    methods:{
    }
}
</script>
<style>
.top-img{width: 100%;height: 30%;margin-top:14%;padding: 0;}
.top-img img,.top-img1 img,.top-img2 img,.top-img3 img,.top-img4 img{width: 100%;}
.element-container{width: 100%;max-width: 100%;clear: both;background: #fff;color: #6a6a6a;font-size:0.33rem;text-align: center;line-height:1rem;padding: 0;margin: 0;}
</style>

