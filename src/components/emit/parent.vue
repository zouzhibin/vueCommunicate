<template>
    <div class="hello">
        {{msg}}
        <son @changeEmit="changeEmit"></son>
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
                console.log('',value)
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
