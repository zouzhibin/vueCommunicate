<template>
     <div>
          <span>{{sonValue}}</span>
          <p>接收来自son1的值{{son1}}</p>
     </div>
</template>
<script>
    export default {
         data() {
              return {
                   sonValue: "我是son1"
              }
         },
         computed: {
              son1() {
                   return this.$store.state.son1
              }
         }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
