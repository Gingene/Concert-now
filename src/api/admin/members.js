import { http } from '@/api/index';
const { VITE_APP_SERVICE_API } = import.meta.env;

// 後台
// 會員管理
export const getAdminMembers = async (page) => {
  const url = `${VITE_APP_SERVICE_API}/api/admin/users?page=${page}`;

  try {
    const res = await http.get(url);
    return res;
  } catch (error) {
    console.error('[GetAdminMembers Failed]', error);
    throw new Error('error');
  }
};

// 後台會員管理篩選 (啟用中/停權中)
export const filterAdminMembers = async (email, page) => {
  const url = `${VITE_APP_SERVICE_API}/api/admin/users?q=${email}&status=&page=${page}`;

  try {
    const res = await http.get(url);
    return res;
  } catch (error) {
    console.error('[GetAdminMembers Failed]', error);
    throw new Error('error');
  }
};
