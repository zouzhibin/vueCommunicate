<template>
     <div>
          <span>{{from}}</span>
     </div>
</template>
<script>
    export default {
        inject:{
          from:'foo'
        },
         mounted(){
           console.log('heihe',this)
         },
        data(){
          return{
               sonValue:"我是子组件"
          }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
