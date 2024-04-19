import './assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { http, path, adminPath } from './api';

// vee-validate
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from './App.vue';
import router from './router';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

// 設定預設語系
setLocale('zh_TW');


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

// 創建一個名為 `$errors` 的屬性並將其設置為空對象
// app.config.globalProperties.$errors = {};

app.use(createPinia());
app.use(router);

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
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage);

app.provide('http', http);
app.provide('path', path);
app.provide('adminPath', adminPath);

app.mount('#app');
