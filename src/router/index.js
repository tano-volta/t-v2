import { createRouter, createWebHashHistory } from 'vue-router'
import AboutUs from '../views/AboutUs.vue'
import notFound from '../views/NotFound.vue'
import Events from '../views/Events.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'
import Team from '../views/Team.vue'

const routes = [
  {
    path: '/',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/team',
    name: 'team',
    component: Team
  },
  //catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: notFound
  }

  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router