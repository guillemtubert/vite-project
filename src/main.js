import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import IntroScreen from './views/IntroScreen.vue';
import Screen1 from './views/Screen1.vue';
import Screen2 from './views/Screen2.vue';
import Screen3 from './views/Screen3.vue';
import Screen4 from './views/Screen4.vue';
// Definición de rutas
const routes = [
    { path: '/', component: IntroScreen },
    { path: '/screen1', component: Screen1 },
    { path: '/screen2', component: Screen2 },
    { path: '/screen3', component: Screen3 },
    { path: '/screen4', component: Screen4 },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
// Crear la aplicación
const app = createApp(App);
app.use(router);
app.mount('#app');
