<template>
     <div>
          <span>{{from}}</span>
          <button @click="changeParent">改变父组件值</button>
     </div>
</template>
<script>
    export default {
        inject:{
          from:'foo'
        },
        data(){
          return{
               sonValue:"我是子组件"
          }
        },
         methods:{
              changeParent(){

              }
         }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
