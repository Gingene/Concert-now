import { ref } from 'vue';
import { http, path, adminPath } from '@/api';
import moment from 'moment';

export default () => {
  let state;
  const err = ref(null);

  const timeCountryFilter = async (topic, timeFactor = '', countryFactor = '', textFactor = '', page = 1) => {
    const interval = timeFactor === '本日' ? 'day' : timeFactor === '本週' ? 'week' : 'month';
    const startTime = moment().startOf(interval).format('YYYY-MM-DD');
    const endTime = moment().endOf(interval).format('YYYY-MM-DD');

    // topic 分辨前後台
    const topicPath = topic === 'front' ? path.concerts : adminPath.concerts;
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
          // console.log(res);
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
