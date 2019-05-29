import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import RealEstatePage from '@/pages/RealEstatePage'
import SellPage from '@/pages/SellPage'
import MentionsPage from '@/pages/MentionsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/realEstateAd/:ad',
      name: 'ad',
      component: RealEstatePage
    },
    {
      path: '/vente',
      name: 'SellPage',
      component: SellPage
    },
    {
      path: '/mentions',
      name: 'MentionsPage',
      component: MentionsPage
    }
  ]
})
