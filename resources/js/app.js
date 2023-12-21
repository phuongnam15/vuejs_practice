import "./bootstrap.js";

import { createApp } from "vue";
import router from "./routers/index.js";

import {
    Menu,
    List, 
    Button, 
    Drawer, 
    message 
} from 'ant-design-vue';
import { createPinia } from 'pinia'

import App from "./app.vue";

import 'ant-design-vue/dist/reset.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(Menu);
app.use(List);
app.use(Drawer);
app.mount('#app');

app.config.globalProperties.$message = message;
