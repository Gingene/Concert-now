import { ref } from 'vue';
import { http } from '@/api';

import { loadingStore } from '../stores/isLoading';
const { setIsLoading } = loadingStore();
export default () => {
  let state;
  const err = ref(null);

  const httpData = async (method, thePath, message) => {
    setIsLoading(message);
    return new Promise((resolve, reject) => {
      http[method](thePath)
        .then((res) => {
          state = res.data;
          resolve(state);
        })
        .catch((error) => {
          console.log(error);
          err.value = error;
          reject(err);
        })
        .finally(() => {
          setIsLoading();
        });
    });
  };

  return { state, err, httpData };
};
