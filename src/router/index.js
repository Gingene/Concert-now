import { createRouter, createWebHashHistory } from 'vue-router';
import NotFound from '../views/NotFound.vue';
import { useUserStore } from '@/stores/user';
import { useToast } from '@/components/ui/toast/use-toast';
import { http, adminPath } from '@/api';

const { toast } = useToast();
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPoistion) {
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      component: () => import('../views/front/FrontView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/front/HomeView.vue'),
          meta: { showFooterNav: true },
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/front/LoginView.vue'),
          beforeEnter: (to, from) => {
            const { AccessToken } = useUserStore();
            if (AccessToken) {
              return { name: 'member' };
            }
          },
        },
        {
          path: 'signup',
          name: 'signup',
          component: () => import('../views/front/SingUpView.vue'),
          beforeEnter: (to, from) => {
            const { AccessToken } = useUserStore();
            if (AccessToken) {
              return { name: 'member' };
            }
          },
        },
        {
          path: 'base',
          name: 'base',
          component: () => import('../views/front/BaseView.vue'),
        },
        {
          path: 'artists',
          name: 'artists',
          component: () => import('../views/front/ArtistsView.vue'),
        },
        {
          path: 'artists/:id',
          name: 'artist',
          component: () => import('../views/front/ArtistSingleView.vue'),
          props: true,
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
          props: true,
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
          props: true,
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/front/AboutUsView.vue'),
        },
        {
          path: 'member',
          name: 'member',
          component: () => import('../views/front/MembersView.vue'),
          beforeEnter: (to, from) => {
            const { AccessToken } = useUserStore();
            if (!AccessToken) {
              return { name: 'login' };
            }
          },
        },
        {
          path: '/loading',
          name: 'loading',
          component: () => import('../views/LoadingView.vue'),
          meta: { showFooterNav: true },
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
      beforeEnter: (to, from) => {
        http
          .get(adminPath.users)
          .then((res) => {
            // console.log(res);
          })
          .catch((error) => {
            console.error(error);
            return { name: 'home' };
          });
        const { AccessToken, user } = useUserStore();
        if (!AccessToken) {
          toast({
            title: '請重新登入',
            description: '',
          });
          return { name: 'login' };
        }
        if (!user.is_admin) {
          toast({
            title: '對不起，你沒有權限進入',
            description: '',
          });
          return false;
        } else {
          toast({
            title: '歡迎回來',
            description: '',
          });
          return true;
        }
      },
      children: [
        {
          path: 'concerts',
          name: 'admin-concerts',
          component: () => import('../views/admin/AdminConcertsView.vue'),
        },
        {
          path: 'artists',
          name: 'admin-artists',
          component: () => import('../views/admin/AdminArtistsView.vue'),
        },
        {
          path: 'venues',
          name: 'admin-venues',
          component: () => import('../views/admin/AdminVenuesView.vue'),
        },
        {
          path: 'analysis',
          name: 'admin-analysis',
          component: () => import('../views/admin/AdminAnalysisView.vue'),
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

// router.beforeResolve((to, from) => {
//   window.scroll(0, 0);
// });

export default router;
