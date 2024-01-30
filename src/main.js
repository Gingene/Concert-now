import './assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { http, path } from './api';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.provide('http', http);
app.provide('path', path);

app.mount('#app');
