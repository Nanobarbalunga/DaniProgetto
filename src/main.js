import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.config.globalProperties.Window = window;
app.config.globalProperties.Document = window.document;
app.config.globalProperties.history = window.history;
app.config.globalProperties.JQuery = window.$;

app.mount('#app');
