/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import ViewMain from '@/components/ViewComponents/ViewMain'
import Home from '@/components/Home'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'
// import AuthorInfo from '@/components/ViewComponents/AuthorInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ViewMain',
      component: ViewMain,
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
//      children: [
//        {
//          path: '/',
//          name: 'FirstPart',
//          component: FirstPart
//        },
//        {
//          path: 'SecondPart',
//          name: 'SecondPart',
//          component: SecondPart
//        }
//      ]
    },
    {
      path: '/FirstPage',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/SecondPage',
      name: 'SecondPage',
      component: SecondPage
    }
  ]
})
