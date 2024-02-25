import { defineStore } from 'pinia';
import { useCookies } from '@vueuse/integrations/useCookies';
import { useToast } from '@/components/ui/toast/use-toast';

const cookies = useCookies();
const { toast } = useToast();

export const useUserStore = defineStore('user', {
  state: () => ({
    AccessToken: '',
    user: {},
  }),
  actions: {
    getToken() {
      this.AccessToken = cookies.get('AccessToken');
    },
    getUser() {
      this.user = JSON.parse(localStorage.getItem('user'));
    },
    logout() {
      cookies.remove('AccessToken');
      localStorage.removeItem('user');
      this.AccessToken = '';
      this.user = {};
      toast({
        title: '登出成功',
        description: '',
      });
    },
  },
});
