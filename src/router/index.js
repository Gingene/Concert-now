import { createRouter, createWebHashHistory } from 'vue-router';
import NotFound from '../views/NotFound.vue';
import { useUserStore } from '@/stores/user';
import { useToast } from '@/components/ui/toast/use-toast';
import { useVenuesStore } from '@/stores/venues';

const { toast } = useToast();

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/front/FrontView.vue'),
      meta: { hideHF: false },
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/front/HomeView.vue'),
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/front/LoginView.vue'),
        },
        {
          path: 'base',
          name: 'base',
          component: () => import('../views/front/BaseView.vue'),
        },
        {
          path: 'concerts',
          name: 'concerts',
          component: () => import('../views/front/ConcertsView.vue'),
        },
        {
          path: 'concerts/:id',
          name: 'concert',
          component: () => import('../views/front/ConcertSingleView.vue'),
        },
        {
          path: 'venues',
          name: 'venues',
          component: () => import('../views/front/VenuesView.vue'),
        },
        {
          path: 'venues/:id',
          name: 'venue',
          component: () => import('../views/front/VenueSingleView.vue'),
          props: (route) => {
            const { getVenue } = useVenuesStore();
            getVenue(route.params.id);
            // return {
            //   route,
            // };
          },
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/front/AboutUsView.vue'),
        },
        {
          path: 'member',
          name: 'member',
          component: () => import('../views/front/Members.vue'),
        },
        {
          path: '/loading',
          name: 'loading',
          component: () => import('../views/LoadingView.vue'),
        },
      ],
    },
    {
      path: '/admin',
      name: 'admin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/admin/AdminView.vue'),
      meta: { hideHF: true },
      beforeEnter: (to, from) => {
        const { AccessToken, user } = useUserStore();
        if (AccessToken && user.is_admin) {
          toast({
            title: '歡迎回來',
            description: '',
          });
          return true;
        } else {
          toast({
            title: '對不起，你沒有權限進入',
            description: '',
          });
          return false;
        }
      },
      children: [
        {
          path: 'concerts',
          name: 'admin-concerts',
          component: () => import('../views/admin/AdminConcertsView.vue'),
        },
        {
          path: 'analysis',
          name: 'admin-analysis',
          component: () => import('../views/admin/AnalysisView.vue'),
        },
        {
          path: 'members',
          name: 'admin-members',
          component: () => import('../views/admin/AdminMembersView.vue'),
        },
        {
          path: 'comments',
          name: 'admin-comments',
          component: () => import('../views/admin/AdminCommentsView.vue'),
        },
        {
          path: 'playlists',
          name: 'admin-playlists',
          component: () => import('../views/admin/AdminPlaylistsView.vue'),
        },
        {
          path: 'settings',
          name: 'admin-settings',
          component: () => import('../views/admin/AdminSettingsView.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFound,
      // props: (route) => {
      //   // console.log(route);
      //   return {
      //     route,
      //   };
      // },
    },
  ],
});

router.beforeEach((to, from) => {
  const { getToken, getUser } = useUserStore();
  getToken();
  getUser();
});

router.beforeResolve((to, from) => {
  window.scroll(0, 0);
});

export default router;
