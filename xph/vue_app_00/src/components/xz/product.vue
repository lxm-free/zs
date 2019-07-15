<template>
    <div class="container">
        <div class="goods-item" v-for="(item,index) of list" :key="index">
            <img src="../../assets/01.png" alt="">
            <h4>{{item.title}}</h4>
            <div class="info">
                <span class="now">￥{{item.price.toFixed(2)}}</span>
            </div>
        </div>
        <!-- 商品详细信息 end -->
        <mt-button size="large" type="primary" @click="lodeMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
   data(){
       return{
           list:[],//保存服务器的数据
           pno:0,//页码
           pageSize:4//页大小
       }
   } ,
   created(){//组件创建成功,调用lodeMore()   
       this.lodeMore();
   },
   methods:{
       //加载更多
       lodeMore(){
           //1，获取当前的页码加1
           this.pno++;
           //2.创建url请求地址
           var url="product";
           //3.创建参数对象
           var obj={pno:this.pno,pageSize:this.pageSize}
           //4.发送Ajax
           this.axios.get(url,{params:obj}).then(result=>{
            //    result.data.data=>服务器的数据
            //this.list=result.data.data;
            var rows=this.list.concat(result.data.data);//拼接多个数组
            this.list=rows;
            console.log(result);
           })
           //5.接受服务器返回数据
           //6.保存list
       }
   }
}
</script>
<style scoped>
/* 最外层父元素 */
.container{
    display: flex;
    flex-wrap: wrap;/*设置子元素换行*/
    justify-content: space-between;/*两端对齐*/
    padding: 4px;
}
.container .goods-item{
    width: 49%;/*元素的宽度*/
    border: 1px solid #ccc;
    box-sizing: border-box;
    margin:2px 0;
    padding:2px;
    display: flex;/*中间的内容设置为弹性布局*/
    flex-direction: column;/*方向按列的方式排序*/
    min-height: 247px;
    border-radius:5px;
}
/*商品样式*/
.container .goods-item img{
    width: 100%;
}

</style>
