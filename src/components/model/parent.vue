<template>
    <div class="hello">
        {{msg}}
        <son  :value="msg" @input="changeEmit"></son>
        <!-- 下面是上面的语法糖 可以简写成 v-model-->
        <son  v-model="msg"></son>
        <son v-model="msg"></son>
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
                msg:100
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
