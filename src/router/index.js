import frontendRoutes from './frontendRoutes'
import adminRoutes from './adminRoutes'

var router;

if (location.pathname.startsWith('/admin')) {
  router = adminRoutes
} else {
  router = frontendRoutes
}

export default router