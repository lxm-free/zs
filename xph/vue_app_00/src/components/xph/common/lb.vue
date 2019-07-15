<template>
<div>
    <div  class="swipe-wrapper">
        <mt-swipe :auto="4000" style="height:2.5rem;">
            <mt-swipe-item class="swip-item-1 item"><img :src="img1" alt="" class="imgstyle"></mt-swipe-item>
            <mt-swipe-item class="swip-item-2 item"><img :src="img2" alt="" class="imgstyle"></mt-swipe-item>
            <mt-swipe-item class="swip-item-3 item"><img :src="img3" alt="" class="imgstyle"></mt-swipe-item>
        </mt-swipe>
    </div>
</div>
    
</template>
<script>
export default {
    props:{
        img1:{default:""},
        img2:{default:""},
        img3:{default:""},
        img4:{default:""},
        img5:{default:""},
        img6:{default:""},
        txt:{default:""},
        txt2:{default:""},
        txt3:{default:""},
    }
}
</script>
<style>
/* 所有的小点点*/
.mint-swipe-indicators{top:74%;}
/*某一个小点点*/ 
.mint-swipe-indicator{opacity: 0.8 !important;}
/*活动的小点点即当前选中的小点点*/ 
.mint-swipe-indicator .is-active{background: #fff!important;z-index: 999;}
.imgstyle{width: 100%;}
.swipe-wrapper{width: 100%; } 

 
</style>
