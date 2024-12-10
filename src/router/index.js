import { createRouter, createWebHistory } from 'vue-router';

// Imports views
import HomeView from '../views/HomeView.vue';
import AddContactView from '../views/AddContactView.vue';
import ContactDetailsView from '../views/ContactDetailsView.vue';
import EditContactView from '../views/EditContactView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/add', name: 'AddContact', component: AddContactView },
  { path: '/contact/:id', name: 'ContactDetails', component: ContactDetailsView },
  { path: '/edit/:id', name: 'EditContact', component: EditContactView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
	scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
