import { ref } from 'vue';
import { http, path } from '@/api';
import moment from 'moment';

export default () => {
  let state;
  const err = ref(null);

  const timeCountryFilter = async (topic, timeFactor = '', countryFactor = '', page = 1) => {
    const interval = timeFactor === '本日' ? 'day' : timeFactor === '本週' ? 'week' : 'month';
    const startTime = moment().startOf(interval).format('YYYY-MM-DD');
    const endTime = moment().endOf(interval).format('YYYY-MM-DD');
    // 時間篩選有兩個主題: 演唱會concerts、表演者artists
    const topicPath = topic === 'concerts' ? path.concerts : path.artists;
    let lastPath = '';

    const timePath=`&start=${startTime}&end=${endTime}`;
    const countryPath = `&country=${countryFactor}`;
    const pagePath = `&page=${page}`;

    if (timeFactor !== '' && countryFactor !== '') {
      lastPath = topicPath + '?' + timePath + countryPath + pagePath;
    } else if (timeFactor !== '' && countryFactor === '') {
      lastPath = topicPath + '?' + timePath + pagePath;
    } else if (countryFactor !== '' && timeFactor === '') {
      lastPath = topicPath + '?' + countryPath + pagePath;
    }else{
      lastPath = topicPath + '?' + pagePath;
    }

    return new Promise((resolve, reject) => {
      http
        .get(lastPath)
        .then((res) => {
          console.log(res);
          state = res.data;
          resolve(state);
        })
        .catch((error) => {
          console.log(error);
          err.value = error;
          reject(err);
        });
    });
  };

  return { state, err, timeCountryFilter };
};
