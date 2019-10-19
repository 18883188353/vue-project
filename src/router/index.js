import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ceshi from '@/components/ceshi'
import list from '@/components/list'
import details from '@/components/details'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'HelloWorld', component: HelloWorld},
    {path: '/ceshi', name: 'ceshi', component: ceshi},
    {path: '/list', name: 'list', component: list},
    {path: '/details', name: 'details', component: details},

  ]
})
