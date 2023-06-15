import './assets/main.css';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import route from './router';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(route);
app.mount('#app');
