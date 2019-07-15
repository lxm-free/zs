<template>
    <div class="con">
        <titlebar centerTitle="品牌团"></titlebar>
        <div style="height:0.8rem;"></div>
        <div class="nav">
            <ul >
                <li @click=choose(0) :class="{active:num==0}">综和</li>
                <li @click=choose(1) :class="{active:num==1}">销量</li>
                <li @click=choose(2) :class="{active:num==2}">价格</li>
            </ul>
        </div>
        <div  v-show="0==num">
            <div class="good-items">
                 <div class="good_it" v-for="(item11,index) of lst" :key="index">
                    <router-link :to="'/productInfo?id='+item11.id"><img :src="'http://127.0.0.1:3000/'+item11.img" alt=""></router-link>
                    <span class="jx">{{item11.title1}}</span>
                    <div class="info">
                        <span class="pri">￥{{item11.price}}</span>
                        <div style="text-align:right;color:#999;" >
                            <img src="../../assets/1/ren.png" alt="" class="info-img">
                            <span style="margin-left:3%;">{{item11.num}}人团</span>
                        </div> 
                    </div>
                </div> 
            </div>  
        </div>
        <div v-show="1==num">
            <div class="good-items">
                <div class="good_it" v-for="(item12,index) of lst2" :key="index">
                <img :src="'http://127.0.0.1:3000/'+item12.img" alt="">
                <span class="jx">{{item12.title1}}</span>
                <div class="info">
                    <span class="pri">￥{{item12.price}}</span>
                    <div style="text-align:right;color:#999;" >
                        <img src="../../assets/1/ren.png" alt="" class="info-img">
                        <span style="margin-left:3%;">{{item12.num}}人团</span>
                    </div> 
                </div>
            </div> 
            </div>  
        </div>
        <div v-show="2==num">
            <div class="good-items">
                 <div class="good_it" v-for="(item11,index) of lst" :key="index">
                    <img :src="'http://127.0.0.1:3000/'+item11.img" alt="">
                    <span class="jx">{{item11.title1}}</span>
                    <div class="info">
                        <span class="pri">￥{{item11.price}}</span>
                        <div style="text-align:right;color:#999;" >
                            <img src="../../assets/1/ren.png" alt="" class="info-img">
                            <span style="margin-left:3%;">{{item11.num}}人团</span>
                        </div> 
                    </div>
                </div> 
            </div> 
        </div>
    </div>
   
    
</template>
<script>
import titleBar from "./common/titleBar"
export default {
    data(){
        return {
            num:0,
            lst:[],
            lst2:[]
        }
    },
    components:{
        "titlebar":titleBar
    },
    created(){
        this.load();
        this.load2();
    },
    methods:{
        choose(a){
            this.num=a;
        },
        load(){
           //2.创建url请求地址
           var url="product3";
           //3.创建参数对象
           //4.发送Ajax
           this.axios.get(url).then(result=>{
            //result.data=>服务器的数据
            //5.接受服务器返回数据
            var rows=this.lst.concat(result.data);//拼接多个数组
             //6.保存lst
            this.lst=rows;
           })   
       },
       load2(){
           //2.创建url请求地址
           var url="product4";
           //3.创建参数对象
           //4.发送Ajax
           this.axios.get(url).then(result=>{
            //result.data=>服务器的数据
            //5.接受服务器返回数据
            var rows=this.lst2.concat(result.data);//拼接多个数组
             //6.保存lst
            this.lst2=rows;
           })   
       },
    }
}
</script>
<style>
.nav ul{display: flex;background-color: #fff;margin-top:4%}
.nav ul li{width: 20%;height: 0.8rem;line-height: 0.8rem;text-align: center;}
.good-items{display: flex;width: 100%;flex-wrap: wrap;}
.good_it{width: 49%;/*元素的宽度*/background-color:#fff;padding:3%;display: flex;/*中间的内容设置为弹性布局*/flex-direction: column;/*方向按列的方式排序*/min-height: 50%;border-radius:5px;line-height: 0.5rem;}
.good-items .jx{color: #666;font-size: 0.3rem;}
.good-items img{width: 100%;}
.info{display: flex;justify-content: space-between;}
.info .pri{color: #ff458e;font-size: 0.3rem;}
.info img{width: 20%;height: 50%;margin: 2%;}
.active{color: #ff458e;}
</style>
