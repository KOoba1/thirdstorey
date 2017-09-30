import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Explore from '@/components/Explore'
import Single from '@/components/Single'
import Analytics from '@/components/Analytics'

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
    ,
	{
      path: '/Single',
      name: 'Single',
      component: Single
    }  ,
	{
      path: '/Analytics',
      name: 'Analytics',
      component: Analytics
    }
  ]
})
