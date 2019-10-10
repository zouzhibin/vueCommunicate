<template>
    <div class="hello">
        {{msg}}
        <son  @update:msg="changeEmit"></son>
        <!--这下面是上面的语法糖，可以简写成这样-->
        <son :msg.sync="msg"></son>
    </div>
</template>
<script>
    import son from './son.vue'
    export default {
        components:{
            son
        },
        data(){
            return{
                msg:"我是父亲"
            }
        },
        methods:{
            changeEmit(value){
                this.msg = value
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
