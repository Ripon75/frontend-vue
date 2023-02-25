import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import HomeView from '../views/frontend/HomeView'
import CartView from '../views/frontend/CartView'
import ProductsView from '../views/frontend/ProductsView'
import WishList from '../views/frontend/WishList'
import LoginView from '../views/frontend/LoginView'
import RegisterView from '../views/frontend/RegisterView'
import ContactView from '../views/frontend/ContactView'
import CheckoutView from '../views/frontend/CheckoutView'
import ProductDetails from '../views/frontend/ProductDetails'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      page: 'home',
      layout: 'frontend',
      title: 'Home'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: {
      layout: 'frontend',
      title: 'Register'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      guest: true,
      layout: 'frontend',
      title: 'Login'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      layout: 'frontend',
      title: 'Contact'
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
    meta: {
      auth: true,
      layout: 'frontend',
      title: 'Cart'
    }
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: WishList,
    meta: {
      auth: true,
      layout: 'frontend',
      title: 'Wishcart'
    }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView,
    meta: {
      auth: true,
      layout: 'frontend',
      title: 'Checkout'
    }
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
    meta: {
      layout: 'frontend',
      title: 'Products'
    }
  },
  {
    path: '/products/:id/:slug',
    name: 'product-details',
    component: ProductDetails,
    meta: {
      layout: 'frontend',
      title: 'Details'
    },
    props:true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const defaultTitle = 'E-Shop';

// Set dynamically title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || defaultTitle
  next()
})

// Protect login and dashboard route
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.GET_AUTH_STATUS) {
      next({
        name: 'login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (store.getters.GET_AUTH_STATUS) {
      next({
        name: 'home'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
