<template>
     <div>{{msg}}</div>
</template>
<script>
    export default {
        data(){
             return{
                  msg:"我是儿子emit"
             }
        },
         mounted() {
              this.$emit('update:msg',this.msg)
         }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
