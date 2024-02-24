import './assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { http, path, adminPath } from './api';

import App from './App.vue';
import router from './router';

// icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';
import { faAlignJustify, faArrowLeft, faX, faArrowDown, faArrowUp, faMagnifyingGlass, faPlus, faChevronUp, faChevronDown, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const app = createApp(App);

app.use(createPinia());
app.use(router);

library.add(faInstagram, faFacebook, faLine, faAlignJustify, faArrowLeft, faX, faArrowDown, faArrowUp, faMagnifyingGlass, faPlus, faChevronUp, faChevronDown, faBookmark, faBookmarkRegular);
app.component('font-awesome-icon', FontAwesomeIcon); // 使用kebab-case

app.provide('http', http);
app.provide('path', path);
app.provide('adminPath', adminPath);

app.mount('#app');
