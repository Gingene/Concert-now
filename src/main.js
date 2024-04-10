import './assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { http, path, adminPath } from './api';

import App from './App.vue';
import router from './router';

// google oauth
// import vue3GoogleLogin from 'vue3-google-login';
// icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faLine, faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';

import { faAlignJustify, faArrowLeft, faX, faArrowDown, faArrowUp, faMagnifyingGlass, faPlus, faChevronUp, faChevronDown, faBookmark, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.use(vue3GoogleLogin, {
//   clientId: '1025367409648-3obi0crdef5qos8cjpqnpm3l2se4j944.apps.googleusercontent.com',
// });

library.add(
  faInstagram,
  faFacebook,
  faLine,
  faEnvelope,
  faGithub,
  faLinkedin,
  faGoogle,
  faAlignJustify,
  faArrowLeft,
  faX,
  faArrowDown,
  faArrowUp,
  faMagnifyingGlass,
  faPlus,
  faChevronUp,
  faChevronDown,
  faBookmark,
  faBookmarkRegular,
);

app.component('font-awesome-icon', FontAwesomeIcon); // 使用kebab-case

app.provide('http', http);
app.provide('path', path);
app.provide('adminPath', adminPath);

app.mount('#app');
