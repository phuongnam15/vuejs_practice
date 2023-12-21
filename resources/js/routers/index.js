import { createRouter, createWebHistory } from "vue-router";
import admin from "./admin.js";
const routes = [
    ...admin
];
let router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;