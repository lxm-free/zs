<template>
    <div class="cart">
        <!-- 全选按钮 -->
        <div class="selectAll">
            全选 
            <input type="checkbox" @click="selectAll">
        </div>
        <!-- 购物商品信息 -->
        <div class="cart-item" v-for="(item,index) of list" :key="index">
            <div class="leftImgTxt">
                <input type="checkbox" v-model="item.cb" :checked="item.cb">
                <img :src="'http://127.0.0.1:3000/'+item.img" class="img">
                <div class="rightImg">
                    <span>￥{{item.price.toFixed(2)}}</span>
                    <span></span>
                </div>
            </div>
            <mt-button @click="delItem" :data-id="item.id" class="delBtn">删除</mt-button>
        </div>
        <!-- 删除选中的商品 -->
        <div class="delAll">
            <mt-button @click="delAll">清空购物车</mt-button>
            <mt-button @click="delSelected">删除选中的商品</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[],

        }
    },
    created(){
        this.loadMore();
    },
    methods:{
        delSelected(){
            //删除选中的商品
            //1.创建变量保存空字符串
            var str="";
            //2.创建循环遍历每个数组中的元素
            for(var item of this.list){
                 //3.判断cb的选中状态是否为true
                 if(item.cb){
                    //4.获取当前id拼字符串
                    str+=item.id+",";
                 }
            }
           
            //5.判断
            if(str.length==0){
                this.$messagebox("","请选择要删除的商品");
                return;
            }
            str=str.substring(0,str.length-1);
           //6.发送Ajax请求
           var url="delAll";
           var obj={ids:str};
           this.axios.get(url,{params:obj}).then(result=>{
               this.loadMore();
           });
          },
        delAll(){
        //清空购物车中的商品
        //创建变量保存空字符串
        var str="";
        //创建循环遍历数组
        for(var item of this.list){
           //获取当前元素id凭借字符串
           str+=item.id+",";
        } 
        if(str.length==0){
           this.$messagebox("","请选中要删除的数据");  
           return;
        }
        //结果1,2,3
            str=str.substring(0,str.length-1);
                                                                                       
        //发送Ajax请求获取数据
        //创建url
        var url="delAll";
        //创建obj
        var obj={ids:str};
        //发送Ajax请求
        this.axios.get(url,{params:obj}).then(result=>{
            this.loadMore();
        })
        },
        selectAll(e){
            //获取当前按钮的状态
            var rs=e.target.checked;
            //获取购物车数组列表
            //创建循环
            for(var item of this.list){
                 item.cb=rs;//实现全选 
              
            }
            
        },
        loadMore(){
           //1.创建URL
           var url="cart";
           //2.发送ajax 请求
           this.axios.get(url).then(result=>{
               //1.获取数组
               var rows=result.data.data;
               //2.创建循环为数组中的元素添加cb属性
                for(var item of rows){
                    item.cb=false;
                }
               //3.将修改后数据赋值list
               this.list=rows;
               //console.log(result);
               
               
           })
           //3.获取服务器购物车数据
           //4.保存
        },
        delItem(e){
            this.$messagebox({
                title:"消息",
                message:"是否删除商品",
                showConfirmButton:true,
                showCancelButton:true,
            }).then(result=>{
                //console.log(result);
                //如果用户选中取消按钮，就听停止执行
                if("cancel"==result){
                    return;
                }else{
                        //1.获取当前商品的id
                        var id=e.target.dataset.id;
                        
                        //2.发送Ajax请求删除商品
                        var url="del";
                        var obj={id:id};
                        this.axios.get(url,{params:obj}).then(result=>{
                            console.log(result);
                            this.loadMore();
                        })
                }
            })
        }
    }
}
</script>
<style scoped>
/*最外层商品容器*/ 
    .cart-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    /*修饰左侧的图片与文字  */
    .leftImgTxt{
        display: flex;
    }
    .img{
        width: 50px;
        height:50px;
    }
    .rightImg{
        display: flex;
        margin-left: 15px;
        align-items: center;
    }
</style>

