<template>
     <div>{{msg}}</div>
</template>
<script>
    export default {
        props: {
            // msg: String,
            msg:{
                type:String,
                default:"我是儿子"
            }

        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
