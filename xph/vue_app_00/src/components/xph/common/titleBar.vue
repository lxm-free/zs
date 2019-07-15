<template>
    <div class="page-head">
        <button class="fh" v-on:click="goback">&lt返回</button>
        <span>{{centerTitle}}</span>
    </div>
</template>
<script>
export default {
    data(){
       return {}
    } ,
    props:{
        centerTitle:{default:""}
    },
    methods:{
        goback(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
.page-head{display: flex;position: fixed;top:0;z-index:999;width: 100%;justify-content:center;align-items: center;height:8%;background-color:#ff458e;color: #fff; font-size: 0.4rem;text-align: center;}
.page-head span{position:absolute;}
.fh{position: relative;left:-40%;background: transparent;border: none;color: #fff;font-size: 0.35rem}
</style>
