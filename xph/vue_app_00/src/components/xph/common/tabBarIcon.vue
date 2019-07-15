<template>
    <div>
        <img :src="focused?selectedImage:normalImage" alt="" class="imgs">
    </div>
</template>
<script>
export default {
    props:{
        focused:false,
        selectedImage:{default:""},
        normalImage:{default:""}
    }
}
</script>
<style>
.imgs{
    width: 15%;
    height: 15%;
}
.mint-tab-item.is-selected{background-color:transparent!important;}
.mint-tab-item.is-selected>.mint-tab-item-label{color: #ff458e!important;} 
.mint-tabbar{height:0.8rem;align-items: center;}
</style>
