import { createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'products.index',
        component: productIndex
    }

]


const router = createRouter({
    history: createWebHistory(),
    rou

});

export default router;