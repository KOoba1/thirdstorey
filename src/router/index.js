import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Explore from '@/components/Explore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
	{
      path: '/Explore',
      name: 'Explore',
      component: Explore
    }
  ]
})
