import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { demoLib } from '@monorepo/demo-lib';

demoLib();

createApp(App).mount('#app');
