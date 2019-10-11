<template>
     <div>
          <span>{{sonValue}}</span>

     </div>
</template>
<script>
    export default {
        data(){
          return{
               sonValue:"我是son1"
          }
        },
         mounted() {
             this.$EventBus.$on('son1',(val)=>{
                  this.sonValue = val
             })
         }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
