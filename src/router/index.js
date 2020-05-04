import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  /* eslint-disable */
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      name: 'Hello',
      component: Hello
    }
  ]
})
