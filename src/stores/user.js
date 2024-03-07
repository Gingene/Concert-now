import { defineStore } from 'pinia';
import { useCookies } from '@vueuse/integrations/useCookies';
import { useToast } from '@/components/ui/toast/use-toast';
import { http, path } from '@/api';

const cookies = useCookies();
const { toast } = useToast();

export const useUserStore = defineStore('user', {
  state: () => ({
    AccessToken: '',
    user: {},
    userDynamic: {},
    // 收藏與追蹤列表
    savedConcerts: [],
    followedArtists: [],
  }),
  actions: {
    getUserDynamic() {
      http
        .get(`${path.me}`)
        .then((res) => {
          this.userDynamic = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getToken() {
      this.AccessToken = cookies.get('AccessToken');
    },
    getUser() {
      this.user = JSON.parse(localStorage.getItem('user'));
    },
    // 備註: 使用者登入API不會回傳收藏saved_concerts與追蹤followed_artists欄位
    // 取得收藏與追蹤列表
    getUserSavedAndFollowed() {
      http
        .get(`${path.me}`)
        .then((res) => {
          this.savedConcerts = res.data.data.saved_concerts;
          this.followedArtists = res.data.data.followed_artists;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    logout() {
      // cookies.remove('AccessToken');
      const key = 'AccessToken';
      document.cookie = key + '="";expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
      localStorage.removeItem('user');
      this.AccessToken = '';
      this.user = {};
      toast({
        title: '登出成功',
        description: '',
      });
      location.reload();
    },
    adminLogout() {
      const key = 'AccessToken';
      document.cookie = key + '="";expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
      localStorage.removeItem('user');
      this.AccessToken = '';
      this.user = {};
      location.href = '/';
    },
  },
});
