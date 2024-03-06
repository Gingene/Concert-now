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
// 取得『表演者總覽頁面』資料
export const getArtists = async (page) => {
  const url = `${VITE_APP_SERVICE_API}/api/artists?page=${page}`;

  try {
    const res = await http.get(url);
    return res;
    
  } catch (error) {
    console.error('[GetArtists Failed]', error);
    throw error;
  }
};

// 取得『單一表演者頁面』資料
export const getSingleArtist = async (id) => {
  const url = `${VITE_APP_SERVICE_API}/api/artists/${id}`;

  try {
    const res = await http.get(url);
    return res;

  } catch (error) {
    console.error('[GetSingleArtist Failed]', error);
    throw error;
  }
};

// 取得『input 篩選表演者頁面』資料
export const getInputArtist = async (searchText, country, page) => {

  const url = `${VITE_APP_SERVICE_API}/api/artists?q=${searchText}&page=${page}&country=${country}`;

  try {
    const res = await http.get(url);
    return res;
  } catch (error) {

    console.error('[GetInputArtist Failed]', error);
    throw error;
  }
};

// 網站會員
// post - 『新增』表演者『追蹤演唱會』資料
export const postFollowConcets = async (id) => {
  const url = `${VITE_APP_SERVICE_API}/api/artists/${id}/follow`;

  try {
    const res = await http.post(url);
    return res;
  } catch (error) {
    console.log('[PostFollowConcets Failed]', error);
  }
};

// delete - 『刪除』表演者『追蹤演唱會』資料
export const deleteFollowConcets = async (id) => {
  const url = `${VITE_APP_SERVICE_API}/api/artists/${id}/unfollow`;

  try {
    const res = await http.delete(url);
    return res;

  } catch (error) {
    console.log('[DeleteFollowConcets Failed]', error);
  }
};

// 取得單一表演者之『收藏演唱會』資料
export const getSavedConcerts = async () => {
  const url = `${VITE_APP_SERVICE_API}/api/me`;

  try {
    const res = await http.get(url);
    return res;

  } catch (error) {

    console.error('[GetSavedConcerts Failed]', error);
    throw error;
  }
};

// post - 『新增』單一表演者之『收藏演唱會』資料
export const postSaveConcerts = async (id) => {
  const url = `${VITE_APP_SERVICE_API}/api/concerts/${id}/save`;
  try {
    const res = await http.post(url);
    return res;
  } catch (error) {
    console.error('[PostSaveConcerts Failed]', error);
    throw error;
  }
};

// delete - 『刪除』單一表演者之『收藏演唱會』資料
export const deleteSaveConcerts = async (id) => {
  const url = `${VITE_APP_SERVICE_API}/api/concerts/${id}/unsave`;
  try {
    const res = await http.delete(url);
    return res;

  } catch (error) {
    console.error('[DeleteSaveConcerts Failed]', error);
    throw error;
  }
};
