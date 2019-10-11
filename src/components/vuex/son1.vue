<template>
     <div>
          <span>{{sonValue}}</span>
          <button @click="btn">在son1里面改变son的值</button>
     </div>
</template>
<script>
    export default {
        data(){
          return{
               sonValue:"我是son2"
          }
        },
         methods:{
             btn(){
                  this.$store.commit('changeSon','哈哈哈哈，收到了吗')
             }
         }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
