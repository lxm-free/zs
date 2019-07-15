<!--MessageList.vue-->
<template>
    <div>        
        <message class="itemstyle" v-for="(item,index) in datas.data" :key="index" :id="item.id" :title="item.title" :subtitle="item.subtitle" :sendtime="item.time" :imgurl="require('../../../assets/a_7.png')" :itemClick="clickitem"></message>
      
    </div>
</template>
<script>
//负责引入子组件
import Message from "./Message.vue"
//负责引入json文件
import messagejson from "../json/messagelist.json"
export default {
   
    data(){
        return {
            datas:messagejson
        }
    },
    methods:{
        clickitem(n){console.log(n);}
    },
    //注册子组件（即html中的标签名称）
    components:{
        "message":Message,
        }
}
</script>
<style scoped>
    .itemstyle{
        padding: 5px;
        border-bottom: 1px solid #d9d9d9;
      
    }
</style>
