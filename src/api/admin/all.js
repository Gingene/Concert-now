import { http } from '@/api/index';
// const { VITE_APP_SERVICE_API } = import.meta.env;

// 取得後台表演者頁面
export const getAdminArtists = async (page) => {
  const url = `/admin/artists?page=${page}`;

  try {
    const res = await http.get(url);
    return res;
  } catch (error) {
    console.error('[GetAdminArtists Failed]', error);
    throw new Error('error');
  }
};

// 後台表演者資訊管理篩選(表演者名稱 & 表演者國籍 );
export const filterAdminArtists = async (artist, page) => {
  // const url = `${VITE_APP_SERVICE_API}/api/admin/users?q=${email}&status=&page=${page}`;
  const url = `/admin/artists?q=${artist}&country=&page=${page}`;

  try {
    const res = await http.get(url);
    return res;
  } catch (error) {
    console.error('[FilterAdminArtists Failed]', error);
    throw new Error('error');
  }
};

// 取得後台會員管理頁面
export const getAdminMembers = async (page) => {
  // const url = `${VITE_APP_SERVICE_API}/api/admin/users?page=${page}`;
  const url = `/admin/users?page=${page}`;

  try {
    const res = await http.get(url);
    return res;
  } catch (error) {
    console.error('[GetAdminMembers Failed]', error);
    throw new Error('error');
  }
};

// // 後台會員管理篩選 (email & 啟用中/停權中)
export const filterAdminMembers = async (email, page) => {
  // const url = `${VITE_APP_SERVICE_API}/api/admin/users?q=${email}&status=&page=${page}`;
  const url = `/admin/users?q=${email}&status=&page=${page}`;

  try {
    const res = await http.get(url);
    return res;
  } catch (error) {
    console.error('[FilterAdminMembers Failed]', error);
    throw new Error('error');
  }
};
