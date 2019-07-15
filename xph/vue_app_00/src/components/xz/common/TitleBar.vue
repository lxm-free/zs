<template>
    <div class="page-head">
      
        <span>{{leftTitle}}</span>
        <div class="right-head">
            <div class="searchDiv" @click="search">
                <img :src="rightFirstImg" alt="" style="width:25px;">  
            </div>
            <div class="searchDiv" style="margin-left:20px;"  @click="add">
                <img :src="rightSecondImg" alt="" style="width:25px;margin-right:15px;">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
       return {}
    } ,
    props:{
        leftTitle:{default:""},
        rightFirstImg:{default:""},
        rightSecondImg:{default:""},
        search:{type:Function},
        add:{type:Function}

    },
}
</script>
<style scoped>
    .page-head{
        display: flex;
        position: fixed;
        z-index:999;
        width: 100%;
        justify-content: space-between;
        padding-left:  7px;
        padding-right: 7px;
        align-items: center;
        height: 48px;
        background-color:#ec393c;
        color: #fff;
        font-size: 18px;
    }
    .right-head{
        display: flex;
    }
    .searchDiv{
        display: flex;
        align-items: center;
        height: 48px;
        
    }
</style>
