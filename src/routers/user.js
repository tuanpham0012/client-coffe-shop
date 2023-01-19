const user = [
    {
        path: '/',
        name: 'user-router',
        component: () => import ("../views/User/Index.vue"),
        meta: { requiresAuth: true },
        children:[
            {
                path: 'portals',
                name: 'portals-list',
                component: () => import("../views/User/Portal/Index.vue"),
            },
        ]
    }
];

export default user;