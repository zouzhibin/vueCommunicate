<template>
    <div class="hello">
        {{msg}}
        <button @click="changeSon">改变子组件值</button>
        <son :msg="msg"></son>

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
            changeSon(){
                this.$children[0].sonValue ='父组件传值了'
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
