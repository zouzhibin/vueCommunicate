<template>
    <div class="hello">
        {{msg}}
        <son></son>
    </div>
</template>
<script>
    import son from './son.vue'
    export default {
        components:{
            son
        },
        provide:{
            foo: "父亲来了啊，搞事了"
        },
        data(){
            return{
                msg:"我是父亲"
            }
        },

    }
</script>

<style scoped lang="scss">

</style>
