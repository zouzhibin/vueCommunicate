<template>
    <div class="hello">
        {{msg}}
        <button @click="changeSon">改变子组件值</button>
        <son  ref="son"></son>

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
                this.$refs.son.sonValue ='父组件传值了'
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
