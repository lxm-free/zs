<template>
    <div>
        <router-link  to="/"><div class="back"><mt-button icon="back"></mt-button></div></router-link>
        <div class="cart">
            <span>购物车</span>
            <span class="cart-right" @click="bj">编辑</span>
            <div  v-for="(item,index) of list" :key="index">
                <div class="shoppingCart">
                <div class="shoppingCart-list">
                    <!-- <span class="check-box "  :class=checkbox1  @click="updated"><img src="../../assets/1/checked.png" alt=""> -->
                    <input type="checkbox" class="check-box" v-model="selected" :value="item">
                    <!-- </span> -->
                </div>
                <div class="shopping-righttxt">
                    <img :src="'http://127.0.0.1:3000/'+item.img">
                    <div style="line-height:.8rem">
                        <p class="p1">{{item.title1}}</p> 
                    </div>
                    <p class="p2" style="font-weight:700">价格￥{{item.price.toFixed(2)}}</p>
                </div>
                <div class="shoppingright">
                    <button class="btn2" @click="item.count>1?item.count--:''">-</button>
                    <span>{{item.count}}</span>
                    <button class="btn1" @click="item.count++">+</button>
                    <span class="del" @click="del(index)" v-if="show==true">删除</span>
                </div>  

            </div>
            <div class="cart-bottom">
                <input type="checkbox" class="check-box-bottom" @click="selectAll" v-model="checked">
               <!-- <span class="check-box-bottom"><img src="../../assets/1/checked.png" alt=""></span> -->
               <span class="all">全选</span>
               <!-- <span class="del" @click="deleteProduct">删除</span> -->
               <span class="hj">合计：<span style="color: #ff9038;font-weight:700">￥{{getTotal.totalPrice.toFixed(2)}}</span> </span>
               <span class="js">结算</span>
            </div>
           </div>
            
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            n:0,
            list:[],
            selected:[],
            checked:false,
            totalPrice:0,
            current:0,
            show:false
        }
    },
    created(){
        this.addCart();
    },
    methods:{
        bj(){
           this.show = !this.show;
        },
        //删除选中的产品
        // deleteProduct(){
        //     this.List =this.List.filter(function(item){return !item.select})
        // },
        //删除单条商品
        del(index){
             var id=localStorage.getItem("uid"); 
             var obj={id:id} 
             var url="delete" ;
             this.axios.get(url,{params:obj}).then(result=>{
                this.list.splice(index,1); 
             })
             
        },
        selectAll(){
             if(this.checked==false){
                this.selected = [];//先清空防止重复 再全添加
                this.list.forEach(a => {
                    this.selected.push(a)
                })
            }else{
                this.selected = []
            }   
        },
        addCart(){
            var url="shoppingcart";
            // var obj={id} ,{params:obj}
            this.axios.get(url).then(result=>{
                var rows=this.list.concat(result.data);//拼接多个数组
                this.list=rows;
                //console.log(this.list)
                //console.log(result);
           })   
        },   
    },
    computed:{//计算属性
            getTotal:function(){//计算总计
                var totalPri = 0;//已选中列表的数量乘以价格 相加的和
                for (var i = 0,len = this.selected.length; i < len; i++) {
                    totalPri+=Number(this.selected[i].price)*Number(this.selected[i].count);
                }
                return {totalNum:this.selected.length,totalPrice:totalPri}
            },
        },
    updated(){
        if(this.selected.length==this.list.length){//复选框全选中 则全选框选中
            this.checked=true;
        }else{
            this.checked=false;
        }
    }

}
</script>
<style>
.cart{width:100%;height: 1.2rem;position: absolute;background-color: #ff9038;color: #fff;text-align: center;line-height: 1.2rem}
.cart-right{float:right;margin-right:5%;}
.shoppingCart{width: 100%;margin-bottom: 10%;background-color: #fff;color: #000;display: flex;justify-content: space-between;}
.shoppingCart-list{width: 10%}
.check-box img{width: 50%;}
.shopping-righttxt{position: relative;width:50%}
.shopping-righttxt img{width: 30%;float: left;margin-right: 3%;}
.p1,.p2{position: absolute;color:#444;font-size: 0.1rem;top:0%;left: 30%;margin-left: 2%}
.p2{top:3%;line-height: 1.4rem;color:#ff9038;}
.shoppingright{display: flex;width: 30%;line-height: 0.5rem;justify-content: space-between;margin-top: 3%;}
.shoppingright .btn1,.shoppingright .btn2,.shoppingright .ipt{background-color: #f1f1f1;border: none;border-radius: 0%}
.shoppingright .btn1,.shoppingright .btn2{width: 10%;height: 25px;padding-right: 15%;}
.shoppingright .ipt{width:46%;height: 25px;display: inline-block;}
.cart-bottom{display:flex;width:100%;position: fixed;height:40px;box-shadow:0 -1px 2px #eee;left: 0;bottom: 0;padding-top: 3%;padding-left: 1%;}
.check-box-bottom{width:5%;height:20px;position:relative;margin-right: 2%}
.check-box-bottom img{width: 85%;position: absolute;left:8%;top:27%}
.all{margin-right: 3%}
.all,.hj,.del{color: #444;font-size: 0.1rem;margin-top: -5%;}
.hj{margin-left: 35%}
.js{width:20%;background-color:#ff9038;color: #fff;font-size: 0.1rem;margin-top:-3%;position: absolute;left: 80%;line-height: 0.8rem}
</style>
