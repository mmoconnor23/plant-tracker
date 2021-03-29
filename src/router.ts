import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Calendar from '@/views/Calendar.vue';
import PlantPage from '@/views/PlantPage.vue';
import Plants from '@/views/Plants.vue';
import Profile from '@/views/Profile.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/plants',
  },
  {
    path: '/plants',
    name: 'Plants',
    component: Plants,
  },
  {
    path: '/plants/:name',
    name: 'PlantPage',
    component: PlantPage,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
