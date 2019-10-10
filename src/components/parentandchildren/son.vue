<template>
     <div>
          <span>{{sonValue}}</span>
          <button @click="changeParent">改变父组件值</button>
     </div>
</template>
<script>
    export default {
        data(){
          return{
               sonValue:"我是子组件"
          }
        },
         methods:{
              changeParent(){
                    this.$parent.msg="子组件传值了"
              }
         }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
