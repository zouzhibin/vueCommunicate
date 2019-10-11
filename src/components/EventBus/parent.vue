<template>
    <div class="hello">
        {{msg}}
        <son></son>
        <son1></son1>
    </div>
</template>
<script>
    import son from './son.vue'
    import son1 from './son1.vue'
    export default {
        components:{
            son,
            son1
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
