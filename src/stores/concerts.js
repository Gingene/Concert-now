import { defineStore } from 'pinia';
import { http, path } from '@/api';
import Swal from 'sweetalert2';

export const concertStore = defineStore('concertStore', {
  state: () => {
    return {
      concerts: [],
    };
  },
  actions: {
    getConcerts() {
      http
        .get(path.concerts)
        .then((res) => {
          console.log(res);
          this.concerts = [...res.data.data];
          Swal.fire({
            icon: 'success',
            text: '成功抓取演唱會資料',
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
