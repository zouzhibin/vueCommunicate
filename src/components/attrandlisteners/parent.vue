<template>
    <div class="hello">
        {{msg}}
        <button @click="changeSon">改变子组件值</button>
        <son :msg="msg" name="heihe" age="10" @son="changeSon"></son>
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
            changeSon(val){
                this.msg =val
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
