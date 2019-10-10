<template>
     <div>
          <span>{{msg}}</span>
          <grand @say="say"></grand>
     </div>

</template>
<script>
     import grand from './grand'
    export default {
          components:{
               grand
          },
        data(){
             return{
                  msg:"我是儿子emit"
             }
        },
         methods:{
              say(){
                  this.msg='进行广播了啊'
              }
         }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
