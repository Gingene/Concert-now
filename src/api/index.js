import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_APP_SERVICE_API } = import.meta.env;

function alertMessage(icon, msg) {
  Swal.fire({
    icon,
    text: msg,
  });
}

const http = axios.create({
  baseURL: `${VITE_APP_SERVICE_API}/api`,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

// 攔截器
http.interceptors.request.use(
  (config) => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)AccessToken\s*=\s*([^;]*).*)|^.*$/, '$1');
    // console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config; // 必須回傳config，否則axios會拋出錯誤
  },
  (err) => {
    return Promise.reject(err);
  },
);

http.interceptors.response.use(
  (res) => {
    // console.log(res);
    return res;
  },
  (err) => {
    console.log(err);
    if (!err.response) {
      alertMessage('error', '是不是沒有連接伺服器呢? 請看console><');
      return Promise.reject(err);
    }
    const { status } = err.response;
    switch (status) {
      case 401:
        alertMessage('error', '請重新登入');
        break;
      case 403:
        alertMessage('error', '權限不足');
        break;
      case 404:
        alertMessage('error', '對不起找不到你要的><');
        break;
      default:
        alertMessage('error', '發生錯誤了 請看console><');
        break;
    }
    // console.error(`狀態碼${status} 錯誤訊息${statusText}`);
    return Promise.reject(err); // 必須回傳err，否則axios會拋出錯誤
  },
);

const path = {
  users: '/users',
  artists: '/artists',
  concerts: '/concerts',
  songs: '/songs',
  venues: '/venues',
  venues_comments: '/venues_comments',
  me: '/me',
  login: '/login',
  register: '/register',
};

const adminPath = {
  concerts: '/admin/concerts',
  artists: '/admin/artists',
  venues: '/admin/venues',
  venues_comments: '/admin/venues_comments',
  songs: '/admin/songs',
};

export { http, path, adminPath };


// 一般會員
// 取得表演者資料
export const  getArtists = async () => {
  const url = `${VITE_APP_SERVICE_API}/api/artists?page=1`;

   try {
    const res = await http.get(url);
    return res

   } catch (err) {
     console.error('[GetArtists Failed]', err);
     throw err
   }
}
