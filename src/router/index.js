import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    meta: { requiresAuth: false },
    component: () => import( "../views/LoginView.vue" ),
  },
  {
    path: "/home",
    name: "Home",
    meta: { requiresAuth: true },
    component: () => import( "../views/HomeView.vue" ),
    children: [
      {
        path: '',
        component: () => import( "../components/HomeMain.vue" ),
      },
      {
        path: '/accounts',
        component: () => import( "../components/Accounts.vue" ),
      },
    ],
  },
]

const router = createRouter( {
  history: createWebHistory(),
  routes: routes,
} );


router.beforeEach( async ( to, from ) => {
  const account = JSON.parse( localStorage.getItem( 'account' ) );

  const isAuthenticated = ( account ? true : false );

  if (
    to.meta.requiresAuth &&
    !isAuthenticated &&
    to.name !== 'Login'
  ) {
    return { name: 'Login' };
  }
} );

export default router;
