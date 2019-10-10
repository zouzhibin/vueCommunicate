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
                msg:"我是爷爷"
            }
        },
        mounted(){
            this.$broadcast('say')
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
