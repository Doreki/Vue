import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './pages/coaches/CoachesList.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const CoachDetail = defineAsyncComponent(() =>
  import('./pages/coaches/CoachDetail.vue')
);
const CoachRegistation = defineAsyncComponent(() =>
  import('./pages/coaches/CoachRegistration.vue')
);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach }, // /coaches/c1/contact
      ],
    },
    { path: '/register', component: CoachRegistation },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
