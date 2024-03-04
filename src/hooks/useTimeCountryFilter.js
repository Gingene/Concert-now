import { ref } from 'vue';
import { http, path } from '@/api';
import moment from 'moment';

export default () => {
  let state;
  const err = ref(null);

  const timeCountryFilter = async (topic, timeFactor = '', countryFactor = '', textFactor = '', page = 1) => {
    const interval = timeFactor === '本日' ? 'day' : timeFactor === '本週' ? 'week' : 'month';
    const startTime = moment().startOf(interval).format('YYYY-MM-DD');
    const endTime = moment().endOf(interval).format('YYYY-MM-DD');
    // 時間篩選有兩個主題: 演唱會concerts、表演者artists
    const topicPath = topic === 'concerts' ? path.concerts : path.artists;
    let lastPath = topicPath + '?';

    const timePath = `start=${startTime}&end=${endTime}`;
    const countryPath = `country=${countryFactor}`;
    const textPath = `q=${textFactor}`;
    const pagePath = `page=${page}`;
    const arr = [];

    if (textFactor !== '') arr.push(textPath);
    if (countryFactor !== '') arr.push(countryPath);
    if (timeFactor !== '') arr.push(timePath);

    arr.push(pagePath);
    lastPath += arr.join('&');

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
