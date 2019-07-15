<template>
    <div class="container">
        <div class="img" style="height:86px;">
            <img :src="img4" alt="">
            <img :src="img5" alt="">
            <img :src="img6" alt="">
            <p class="img_p">{{txt}}</p>
            <p class="img_p2">{{txt2}}</p>
            <p class="img_p3">{{txt3}}</p>
        </div>
        <div class="el-con">
            <div class="ele-container">——   ◆  品质水果  ◆ ——</div>
            <img src="../../assets/1/pzsg.jpg" class="elimg"> 
            <div class="rootstyle">
                <div class="leftimgandlablestyle" v-for="(item,index) of list" :key="index">
                   <img :src="'http://127.0.0.1:3000/'+item.img" class="img1" @click="btn">
                    <!--图片右侧的文本-->
                    <div class="rightOfImg_txt">
                        <span class="title1"><!--有点含羞的苹果-->{{item.title1}}</span>
                        <span class="title2">{{item.title2}}<!--品质水果--></span>
                        <span class="title3">{{item.title3}}<!--感恩节回馈价--></span>
                    </div>
                    <div class="righttxt">
                        <span class="title4">{{item.title4}}<!--限时特惠--></span> 
                        <span class="title5">￥<!--1.6-->{{item.price.toFixed(2)}}</span>
                    </div>
                </div>
            </div> 
        </div>
        <div class="el-con">
            <div class="ele-container">——   ◆  精选肉禽  ◆ ——</div>
            <img src="../../assets/1/jxrq.jpg" class="elimg" > 
            <div class="rootstyle">
                <div class="leftimgandlablestyle" v-for="(item1,index) of list1" :key="index">
                    <img :src="'http://127.0.0.1:3000/'+item1.img" class="img1" @click="btn">
                    <!--图片右侧的文本-->
                    <div class="rightOfImg_txt">
                        <span class="title1"><!--有点含羞的苹果-->{{item1.title1}}</span>
                        <span class="title2">{{item1.title2}}<!--品质水果--></span>
                        <span class="title3">{{item1.title3}}<!--感恩节回馈价--></span>
                    </div>
                    <div class="righttxt">
                        <span class="title4">{{item1.title4}}<!--限时特惠--></span> 
                        <span class="title5">￥<!--1.6-->{{item1.price.toFixed(2)}}</span>
                    </div>
                </div>
            </div> 
         </div>
        <div class="el-con">
            <div class="ele-container">——   ◆  新鲜水产  ◆ ——</div>
            <img src="../../assets/1/xxsc.jpg" class="elimg"> 
            <div class="rootstyle">
                <div class="leftimgandlablestyle" v-for="(item2,index) of list2" :key="index">
                    <img :src="'http://127.0.0.1:3000/'+item2.img" class="img1" @click="btn">
                    <!--图片右侧的文本-->
                    <div class="rightOfImg_txt">
                        <span class="title1"><!--有点含羞的苹果-->{{item2.title1}}</span>
                        <span class="title2">{{item2.title2}}<!--品质水果--></span>
                        <span class="title3">{{item2.title3}}<!--感恩节回馈价--></span>
                    </div>
                    <div class="righttxt">
                        <span class="title4">{{item2.title4}}<!--限时特惠--></span> 
                        <span class="title5">￥<!--1.6-->{{item2.price.toFixed(2)}}</span>
                    </div>
                </div>
            </div> 
        </div>     
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],
            list1:[],
            list2:[]
        }
    },
    props:{
        img4:{default:""},
        img5:{default:""},
        img6:{default:""},
        txt:{default:""},
        txt2:{default:""},
        txt3:{default:""},
    },
    created(){//组件创建成功,调用lodeMore()   
      this.lodeMore2();
      this.lodeMore1();
      this.lodeMore();  
   },
    methods:{
       lodeMore(){
           //2.创建url请求地址
           var url="product";
           //3.创建参数对象
           //4.发送Ajax
           this.axios.get(url).then(result=>{
            //    result.data.data=>服务器的数据
            //this.list=result.data.data;
            //5.接受服务器返回数据
            var rows=this.list.concat(result.data.data);//拼接多个数组
             //6.保存list
            this.list=rows;
            //console.log(result);
           })   
       },
        lodeMore1(){
           //2.创建url请求地址
           var url="product1";
           //3.创建参数对象
           //4.发送Ajax
           this.axios.get(url).then(result=>{
            //    result.data.data=>服务器的数据
            //this.list=result.data.data;
            //5.接受服务器返回数据
            var rows=this.list1.concat(result.data.data);//拼接多个数组
             //6.保存list
            this.list1=rows;
            //console.log(result);
           })   
       },
        lodeMore2(){
           //2.创建url请求地址
           var url="product2";
           //3.创建参数对象
           //4.发送Ajax
           this.axios.get(url).then(result=>{
            //    result.data.data=>服务器的数据
            //this.list=result.data.data;
            //5.接受服务器返回数据
            var rows=this.list.concat(result.data.data);//拼接多个数组
             //6.保存list
            this.list2=rows;
            //console.log(result);
           })   
       },
       btn(){
           this.$router.push("/tgProduct")
       }
    }
}
</script>
<style>
.app-container{padding: 0;padding-bottom: 20%;}
/* 最外层父元素 */
.container{display: flex;flex-wrap: wrap;/*设置子元素换行*/justify-content: space-between;/*两端对齐*/height: 100%;  }
.img{width: 100%;max-width: 100%;height:100%;clear: both;display: flex;justify-content: space-between; align-items: center;background: #fff;padding: 0 25px;position: relative;line-height: 100%;} 
.img img{width: 20%;margin-bottom: 5%;}
.img .img_p,.img .img_p2,.img .img_p3{position: absolute;color: #000;font-size: 0.2rem;margin-right: 5px;}
.img .img_p{left:10%;}
.img .img_p2{left: 43%;}
.img .img_p3{left: 77%;}
.container{width: 100%;}
.el-con{width: 100%;max-width: 100%;clear: both;background: #fff;margin-top:3%;}
.ele-container{width: 100%;max-width: 100%;clear: both;background: #fff;color: #666;font-size:0.33rem;text-align: center;line-height:0.8rem;}
.elimg{width:100%;height: 20%;}
.img1{width: 30%;height: 30%;}
.leftimgandlablestyle{display: flex;height: 30%;line-height: 0.5rem;}
.rightOfImg_txt{width:40%;display: flex;flex-direction: column;/*按列的方向排列*/ justify-content: center;/*垂直居中对齐*/margin-left:10px;}
.title1{color: #202020;font-size: 0.32rem;}
.title2{color: #666;font-size: 0.31rem;}
.title3{color: #ff458e;font-size: 0.25rem;}
.righttxt{display:flex;flex-direction:column;justify-content: center;align-items: center ;text-align: right;margin-left: 10%;}
.title4{color: #fec188;font-size: 0.25rem;border: 1px solid #fec188;height:20%;padding:0 5px;}
.title5{color: #ff458e;font-size: 0.4rem;}
</style>
