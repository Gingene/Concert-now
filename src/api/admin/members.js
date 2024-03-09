import { http } from "@/api/index";
const { VITE_APP_SERVICE_API } = import.meta.env;

// 後台
// 會員管理
export const getAdminMembers = async (page) => {
  const url = `${VITE_APP_SERVICE_API}/api/admin/users?page=${page}`;

  try { 
    const res = await http.get(url);
    return res;

  } catch {
    console.error('[GetAdminMembers Failed]', error);
    throw error;
  }
};