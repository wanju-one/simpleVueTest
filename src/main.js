import './assets/common.css';

import { createApp } from 'vue';
import Vuex from 'vuex';

import App from './App.vue';

import router from './router';
import axios from 'axios';

import store from './store/index.js';


const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$serverUrl = '//localhost:8080';
app.use(router).use(Vuex).use(store).mount('#app');

