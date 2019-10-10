<template>
    <div class="hello">
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
        }
    }
</script>

<style scoped lang="scss">

</style>
