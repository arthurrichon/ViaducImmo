import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import RealEstatePage from '@/pages/RealEstatePage'
import SellPage from '@/pages/SellPage'
import RentPage from '@/pages/RentPage'
import BuyPage from '@/pages/BuyPage'
import MentionsPage from '@/pages/MentionsPage'
import AgencePage from '@/pages/AgencePage'

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
    },
    {
      path: '/agence',
      name: 'AgencePage',
      component: AgencePage
    },
    {
      path: '/location',
      name: 'RentPage',
      component: RentPage
    },
    {
      path: '/location/:searchTerm',
      name: 'RentPage',
      component: RentPage
    },
    {
      path: '/achat',
      name: 'BuyPage',
      component: BuyPage
    },
    {
      path: '/achat/:searchTerm',
      name: 'BuyPage',
      component: BuyPage
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
