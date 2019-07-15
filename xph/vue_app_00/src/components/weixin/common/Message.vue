<template>
    <div class="rootstyle" @click="itemClick(id)">
        <!--<h3>Message.vue消息组件</h3>-->
        <div class="leftimgandlablestyle">
            <img :src="imgurl" alt="" class="imgstyle">
            <!--图片右侧的文本-->
            <div class="rightOfImg">
                <span class="titleable">{{title}}</span>
                <span class="subtitle">{{subtitle}}</span>
            </div>
        </div>
        <span class="sendtime">{{sendtime}}</span>  
    </div>
</template>
<script>
export default {
    props:{//接收父元素传过来的数据
        id:{default:""},
        imgurl:{default:""},
        title:{type:String,default:""},
        subtitle:{type:String,default:""},
        sendtime:{type:String,default:""},
        itemClick:{type:Function}
    },
    data(){
        return {}
    },
   
}
</script>
<style scoped>
    /* message的根样式*/
    .rootstyle{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    /* 图片样式*/
    .imgstyle{
        width: 50px;
        height: 50px;
    }
/* 包裹着图片和文本的元素*/
    .leftimgandlablestyle{
        display: flex;
    }
    /* 图片右侧的文本*/
    .rightOfImg{
        display: flex;
        flex-direction: column;/*按列的方向排列*/
        justify-content: center;/*垂直居中对齐*/
        margin-left:7px;
    }
    /* 主标题样式 */
    .titleable{
        color: #000;
        font-size: 17px;
    }
    /* 副标题样式 */
    .subtitle{
        color: gray;
        margin-top: 4px;
    }
    .sendtime{
        /* 定义flex子元素在纵轴上的对齐方式 */
        /* flex-start元素位于纵轴开头位置 */
        align-self: flex-start;
        color: gray;
    }
</style>
