import { defineStore } from 'pinia';
import { http, path } from '@/api';
// import Swal from 'sweetalert2';

export const useConcertsStore = defineStore('concertStore', {
  state: () => {
    return {
      concerts: [],
      pagination: {},
    };
  },
  actions: {
    getConcerts() {
      http
        .get(path.concerts)
        .then((res) => {
          console.log(res);
          this.concerts = [...res.data.data];
          this.pagination = res.data.pagination;
          // Swal.fire({
          //   icon: 'success',
          //   text: '成功抓取演唱會資料',
          //   timer: 1000
          // });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
