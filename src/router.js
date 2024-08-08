import {createRouter, createWebHistory} from "vue-router";
import Home from "./views/Home.vue";
import SignUp from "./views/SignUp.vue";
import RegistrationSuccess from "./views/RegistrationSuccess.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp,
    },
    {
        path: '/sign-up/success',
        name: 'RegistrationSuccess',
        component: RegistrationSuccess,
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/',
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

