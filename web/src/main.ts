import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/styles/index.scss';
import { useStore } from 'vuex';

const app = createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .mount('#app');