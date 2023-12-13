import { createRouter, createWebHistory } from "vue-router";
import invoice from "../components/invoice/index.vue";
import notfound from "../components/notfound.vue";

const routes = [
    {
        path: "/",
        component: invoice
    },
    {
        path: "/:pathMatch(.*)*",
        component: notfound
    },
];
let router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;