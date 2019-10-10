<template>
     <div>
          <span>{{sonValue}}</span>
          {{$attrs}}
          <button @click="changeParent">改变父组件值</button>
     </div>
</template>
<script>
    export default {
         inheritAttrs:false,
        data(){
          return{
               sonValue:"我是子组件"
          }
        },
         methods:{
              changeParent(){
                   this.$listeners.son('改变父组eee件')
              }
         }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
