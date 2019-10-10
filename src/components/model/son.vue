<template>
     <button @click="btn">儿子点击</button>
</template>
<script>
    export default {
         model: {
              prop: 'checked',
              event: 'change'
         },
         methods:{
              btn(){
                   // this.$emit('input',200)
                   this.$emit('change',200)
              }

         }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
