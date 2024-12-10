import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './style.css'
// Imports AOS (Animate on scroll library)
import 'aos/dist/aos.css';
import AOS from 'aos';
// Font Awesome Core - for icons
import { library } from '@fortawesome/fontawesome-svg-core';
// Imports Specific Icons
import { faUser, faEdit, faTrash, faPlus, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
// Imports the Vue Component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Adds Icons to Library
library.add(faUser, faEdit, faTrash, faPlus, faHome, faSearch);

const app = createApp(App);

// Initializes AOS
AOS.init({
  duration: 800, // Animation duration in ms
  offset: 0,    // Trigger offset in px
  easing: 'ease', // Animation easing
  once: false,     // Trigger animations only once
});

// Registers the FontAwesomeIcon Component Globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);  
app.mount('#app');

