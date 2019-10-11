import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// $dispatch
Vue.prototype.$dispatch = function (eventName,value) {
  let parent = this.$parent
  while(parent){
    parent.$emit(eventName,value)
    parent = parent.$parent
  }
}
// $broadcast
Vue.prototype.$broadcast = function (eventName,value) {
  // 获取当前组件下的所有子组件
  let children = this.$children
  let broadcast = (children) =>{
    children.forEach(item=>{
      item.$emit(eventName,value)
      if(item.$children){
        broadcast(item.$children)
      }
    })
  }
  broadcast(children)
}

// 这句话的意思是 因为Vue的原型上有$on $emit 方法 继承自vue原型上的方法，实现一个发布订阅模式
Vue.prototype.$EventBus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
