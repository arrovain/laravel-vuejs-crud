import { createRouter, createWebHistory} from "vue-router";
import productIndex from '../components/products/Index.vue'

const routes = [
    {
        path: '/',
        name: 'products.index',
        component: productIndex
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not_found',
        component: notFound
    }

]


const router = createRouter({
    history: createWebHistory(),
    rou

});

export default router;