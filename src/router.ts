import { createWebHistory, createRouter } from 'vue-router';
import routes from 'pages-generated';

export const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
