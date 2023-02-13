import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/frontend/HomeView'
import ContactView from '../views/frontend/ContactView'
import CartView from '../views/frontend/CartView'
import CheckoutView from '../views/frontend/CheckoutView'
import ShopView from '../views/frontend/ShopView'
import ProductDetails from '../views/frontend/ProductDetails'
import WishList from '../views/frontend/WishList'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      page: 'home',
      layout: 'frontend'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      layout: 'frontend'
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
    meta: {
      layout: 'frontend'
    }
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: WishList,
    meta: {
      layout: 'frontend'
    }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView,
    meta: {
      layout: 'frontend'
    }
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView,
    meta: {
      layout: 'frontend'
    }
  },
  {
    path: '/details',
    name: 'details',
    component: ProductDetails,
    meta: {
      layout: 'frontend'
    }
  },
  {
    path: '/admin',
    name: 'about',
    meta: {
      layout: 'admin',
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
