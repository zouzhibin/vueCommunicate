## vue 完整的组件之间传参方式
### 第一种 父传子 通过 props 传参
先定义了两个组件，父组件parent 和子组件son,子组件接收父组件传过来的参数,子组件通过props属性来接收父组件传
过来的参数，props有几种写法，第一种是以数组的形式接收参数，第二种是以对象的形式接收参数，而且还可以设默认值
```
// 父组件 parent
<template>
    <div class="hello">
        <son :msg="msg"></son>
    </div>
</template>
<script>
    import son from './son.vue'
    export default {
        components:{
            son
        },
        data(){
            return{
                msg:"我是父亲"
            }
        }
    }
</script>
---------------------------------------------------------------------------------
// 子组件 son 
<template>
     <div>{{msg}}</div>
</template>
<script>
    export default {
        props: {
            // msg: String,
            msg:{
                type:String,
                default:"我是儿子"  // 设置默认值
            }

        },
    }
</script>
```

### 第二种子传父 通过事件形式（$emit）

下例详细的描述了 父组件通过传递一个事件changeEmit给子组件 子组件通过$emit触发父组件传过来的事件，
并且可以进行传参 $emit第一个参数 是事件名 第二个参数是进行传递给父组件的参数
```
// 父组件
<template>
    <div class="hello">
        {{msg}}
        <son @changeEmit="changeEmit"></son>
    </div>
</template>
<script>
    import son from './son.vue'
    export default {
        components:{
            son
        },
        data(){
            return{
                msg:"我是父亲"
            }
        },
        methods:{
            changeEmit(value){
                this.msg = value
                console.log('',value)
            }
        }
    }
</script>

子组件
<template>
     <div>{{msg}}</div>
</template>
<script>
    export default {
        data(){
             return{
                  msg:"我是儿子emit"
             }
        },
         mounted() {
              // 触发事件 改变父组件的值 d
              this.$emit('changeEmit',this.msg)
         }
    }
</script>
```

### 第三种 .sync 传参绑定
.sync 其实也是事件传参的语法糖，父组件 以这样的形式@update:msg="changeEmit"
子组件 this.$emit('update:msg',this.msg)进行触发 
而sync是可以进行简写的
```
// 父组件
<template>
    <div class="hello">
        {{msg}}
        <son  @update:msg="changeEmit"></son>
        <!--这下面是上面的语法糖，可以简写成这样-->
        <son :msg.sync="msg"></son>
    </div>
</template>
<script>
    import son from './son.vue'
    export default {
        components:{
            son
        },
        data(){
            return{
                msg:"我是父亲"
            }
        },
        methods:{
            changeEmit(value){
                this.msg = value
            }
        }
    }
</script>
// 子组件
<template>
     <div>{{msg}}</div>
</template>
<script>
    export default {
        data(){
             return{
                  msg:"我是儿子emit"
             }
        },
         mounted() {
              this.$emit('update:msg',this.msg)
         }
    }
</script>
```
### 第四种 v-model 传参绑定

想必我们知道v-model 是 v-bind:value(:value) 和v-on:input(@input) 的语法糖
其实我们也可以把他当做事件传参的方式进行传参，进行实现数据绑定
v-model 可以通过model属性改变事件的传递方式
```
父组件
<template>
    <div class="hello">
        {{msg}}
        <son  :value="msg" @input="changeEmit"></son>
        <!-- 下面是上面的语法糖 可以简写成 v-model-->
        <son  v-model="msg"></son>
        <son v-model="msg"></son>
    </div>
</template>
<script>
    import son from './son.vue'
    export default {
        components:{
            son
        },
        data(){
            return{
                msg:100
            }
        },
        methods:{
            // change(value){
            //     this.msg = value
            // }
        }
    }
</script>
// 子组件
<template>
     <button @click="btn">儿子点击</button>
</template>
<script>
    export default {
         model: {
              prop: 'checked',
              event: 'change'
         },
         methods:{
              btn(){
                   // this.$emit('input',200)
                   this.$emit('change',200)
              }

         }
    }
</script>
```

### 第五种 $children $parent
子实例可以用 this.$parent 访问父实例，子实例被推入父实例的 $children 数组中。
注意的是因为一个父组件里面可以包含很多子组件 因此 $children是一个数组,而$parent是一个对象，他们
两个的值不一样
通过$parent和$children就可以访问组件的实例，拿到实例代表什么？代表可以访问此组件的所有方法和data
```
父组件
<template>
    <div class="hello">
        {{msg}}
        <button @click="changeSon">改变子组件值</button>
        <son :msg="msg"></son>

    </div>
</template>
<script>
    import son from './son.vue'
    export default {
        components:{
            son
        },
        data(){
            return{
                msg:"我是父亲"
            }
        },
        methods:{
            changeSon(){
                // 父组件进行传值给子组件
                this.$children[0].sonValue ='父组件传值了'
            }
        }
    }
</script>

子组件
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
                    // 子组件进行传值给父组件
                    this.$parent.msg="子组件传值了"
              }
         }
    }
</script>
```

### 第六种 ref 和refs 

既然说道 $children 它了，那么肯定能想到refs,它也是获取子组件的实例，ref如果是在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；
如果用在子组件上，引用就指向组件实例，可以通过实例直接调用组件的方法或访问数据， 
父组件在子组件上首先绑定ref属性然后通过$refs获取子组件的属性
```
// 父组件
<template>
    <div class="hello">
        {{msg}}
        <button @click="changeSon">改变子组件值</button>
        // 绑定 son属性
        <son ref="son"></son>

    </div>
</template>
<script>
    import son from './son.vue'
    export default {
        components:{
            son
        },
        data(){
            return{
                msg:"我是父亲"
            }
        },
        methods:{
            changeSon(){
                // 改变子组件的值
                this.$refs.son.sonValue ='父组件传值了'
            }
        }
    }
</script>

// 子组件
<template>
     <div>
          <span>{{sonValue}}</span>
     </div>
</template>
<script>
    export default {
        data(){
          return{
               sonValue:"我是子组件"
          }
        },
    }
</script>
```
### 第七种 $dispatch 和 $broadcast
通过自定义$dispatch方法进行爷孙组件之间进行传参
首先在vue的原型上挂在$dispatch方法
在#app上拿$parent得到的是new Vue()的实例，在这实例上再拿$parent得到的是undefined
因此,当然这种方式会触发所有的父组件的同名事件,当然你也可以进行优化，比如你可以获取到当前的组件的name属性，
同理 既然可以获取所有父级，那肯定也可以递归获取所有子级组件
```
mian.js 
// $dispatch方法
Vue.prototype.$dispatch = function (eventName,value) {
  let parent = this.$parent
    // 最终parent 会变成 undefined
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

爷爷辈组件
<template>
    <div class="hello">
        {{msg}}
        <son @changeEmit="changeEmit"></son>
    </div>
</template>
<script>
    import son from './son.vue'
    export default {
        components:{
            son
        },
        data(){
            return{
                msg:"我是爷爷"
            }
        },
        mounted(){
            this.$broadcast('say')
        },
        methods:{
            changeEmit(value){
                this.msg = value
            }
        }
    }
</script>

儿子组件
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

孙子组件
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
```

### 第八种 $attrs与 $listeners
父组件进行传参之后子组件可以用$attrs进行获取，如果你还想进一步传递给孙子组件可以通过
v-bind="$attrs" ,通过这种方式属性会在dom元素上进行停留，因此子组件加上inheritAttrs:false
这些默认行为将会被去掉
如果父组件进行传递事件给子组件 子组件可以通过$listeners来接收 如果你还想进一步传递给孙子组件可以通过
v-on="$listeners" 

```
// 父组件
<template>
    <div class="hello">
        {{msg}}
        <button @click="changeSon">改变子组件值</button>
        <son :msg="msg" name="heihe" age="10" @son="changeSon"></son>
    </div>
</template>
<script>
    import son from './son.vue'
    export default {
        components:{
            son
        },
        data(){
            return{
                msg:"我是父亲"
            }
        },
        methods:{
            changeSon(val){
                this.msg =val
            }
        }
    }
</script>
// 子组件
<template>
     <div>
          <span>{{sonValue}}</span>
          {{$attrs}}
          <button @click="changeParent">改变父组件值</button>
     </div>
</template>
<script>
    export default {
         inheritAttrs:false, // 默认行为将会被去掉
        data(){
          return{
               sonValue:"我是子组件"
          }
        },
         methods:{
            // 触发父组件
              changeParent(){
                   this.$listeners.son('改变父组eee件')
              }
         }
    }
</script>
```

### 第9种方法  provide / inject
这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，
并在起上下游关系成立的时间里始终生效。
如果你熟悉 React，这与 React 的上下文特性很相似。


### 第十种 localStorage /sessionStorage
这种方式就相对来说比较简单了，但是存储的也想对混乱，不太容易维护，因为五区分模块存储
localStorage.getItem(key)获取数据 通过localStorage.setItem(key,value)存储数据
```
注意用JSON.parse() / JSON.stringify() 做数据格式转换 localStorage / sessionStorage可以结合vuex, 
实现数据的持久保存,同时使用vuex解决数据和状态混乱问题.
```

### 第十一种 cookie 进行存储 同理如上


