<template>
     <div>
          <span>{{msg}}</span>
          <button @click="btn">改变爷爷组件</button>
     </div>

</template>
<script>
    export default {
        data(){
             return{
                  msg:"我是孙子emit"
             }
        },
         methods: {
             btn(){
                  this.$dispatch('changeEmit',200)
             }

         }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
