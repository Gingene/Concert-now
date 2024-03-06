import { defineStore } from 'pinia';
import Swal from 'sweetalert2';
// import useApiData from '@/hooks/useApiData';
import { useDebounceFn } from '@vueuse/core';
import { adminPath, http, path } from '@/api';
import { loadingStore } from '../stores/isLoading';

const { setIsLoading } = loadingStore();
// const { httpData } = useApiData();

export const songsStore = defineStore('songsStore', {
  state: () => ({
    selectReview: '未審閱',
    sortInitial: true,
    controlCheckAll: true,
    songCheckList: [],
    songs: [],
    concertSongs: [],
    backupDatas: [],
    mapSongs: {},
    pagination: {},
    concerts: [],
    searchText: '',
    searchPage: 1,
    concertId: '0',
  }),
  actions: {
    getSongs(page = 1) {
      setIsLoading();
      http
        .get(`${adminPath.songs}/?page=${page}`)
        .then((res) => {
          this.songs = [...res.data.data];
          this.pagination = { ...res.data.pagination };
          this.backupDatas = [...res.data.data];
          // this.mapSongs = Object.groupBy([...res.data.data], ({ concert }) => concert.title);
          // console.log(res);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading();
        });
    },
    getSongsByConcert(concertId) {
      setIsLoading();
      http
        .get(`${path.concerts}/${concertId}`)
        .then((res) => {
          this.concertSongs = [...res.data.data.songs];
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading();
        });
    },
    checkReview(id) {
      const song = this.songs.find((song) => song.id === id);
      song.is_reviewed = true;
    },
    chagneCheckList(id) {
      const song = this.songs.find((song) => song.id === id);
      const check = this.songCheckList.findIndex((item) => item.id === id);
      if (check === -1) {
        this.songCheckList.push(song);
      } else {
        this.songCheckList.splice(check, 1);
      }
    },
    checkAllList() {
      if (!this.controlCheckAll) return;
      const allCheckBox = document.querySelectorAll('[role="checkbox"]');

      allCheckBox.forEach((button, index) => {
        if (index !== 0) {
          if (button.dataset.state !== allCheckBox[0].dataset.state) return;
          button.click();
        }
      });
    },
    checkSelectReview() {
      this.controlCheckAll = false;
      const allCheckBox = document.querySelectorAll('[role="checkbox"]');
      this.songCheckList.forEach((item) => {
        this.checkReview(item.id);
      });
      // 這邊會點擊到所有的checkbox 設一條件再為false時單純模擬點及行為而不觸發checkAllList
      allCheckBox.forEach((button) => {
        if (button.dataset.state === 'checked') {
          button.click();
        }
      });
      this.controlCheckAll = true;
    },
    deleteSelectReview() {
      this.controlCheckAll = false;
      const allCheckBox = document.querySelectorAll('[role="checkbox"]');
      this.songCheckList.forEach((item) => {
        this.deleteSong(item.id);
      });
      // 這邊會點擊到所有的checkbox 設一條件再為false時單純模擬點及行為而不觸發checkAllList
      allCheckBox.forEach((button) => {
        if (button.dataset.state === 'checked') {
          button.click();
        }
      });
      this.controlCheckAll = true;
      this.alertMessage('success', '已刪除');
    },
    sortSongByDownVotes() {
      this.sortInitial = !this.sortInitial;
      if (this.sortInitial) {
        this.songs.sort((a, b) => a.down_votes - b.down_votes);
      } else {
        this.songs.sort((a, b) => b.down_votes - a.down_votes);
      }
    },
    searchSong: useDebounceFn(
      function (e) {
        this.searchText = e.target.value;
        this.searchPage = 1;
        setIsLoading();
        http
          .get(`${adminPath.songs}/?q=${this.searchText}&is_reviewed=0&concert_id=${this.concertId}&?page=${this.searchPage}`)
          .then((res) => {
            this.songs = [...res.data.data];
            this.pagination = { ...res.data.pagination };
            console.log(res);
          })
          .catch((err) => {
            console.error(err);
          })
          .finally(() => {
            setIsLoading();
          });
      },
      500,
      { maxWait: 2000 },
    ),
    searchSongsByConcert() {
      this.searchPage = 1;
      setIsLoading();
      http
        .get(`${adminPath.songs}/?q=${this.searchText}&is_reviewed=0&concert_id=${this.concertId}&?page=${1}`)
        .then((res) => {
          this.songs = [...res.data.data];
          this.pagination = { ...res.data.pagination };
          // console.log(res);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading();
        });
    },
    searchSongsByPage(page) {
      this.searchPage = page;
      setIsLoading();
      http
        .get(`${adminPath.songs}/?q=${this.searchText}&is_reviewed=0&concert_id=${this.concertId}&page=${page}`)
        .then((res) => {
          this.songs = [...res.data.data];
          this.pagination = { ...res.data.pagination };
          // console.log(res);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading();
        });
    },
    getConcerts() {
      setIsLoading();
      http
        .get(`${adminPath.concerts}`)
        .then((res) => {
          this.concerts = [...res.data.data];
          // console.log(this.concerts);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading();
        });
    },
    resetState() {
      this.searchText = '';
      this.searchPage = 1;
      this.concertId = '0';
    },
    // comment 操作
    deleteSong(id) {
      console.log(id);
      const index = this.songs.findIndex((item) => item.id === id);
      this.songs.splice(index, 1);
      this.alertMessage('success', '評論已刪除');
    },
    warnUser(id) {
      // console.log(id);
      this.deleteSong(id);
      this.alertMessage('success', `對${this.userId1.email}使用者警告已送出`);
    },
    alertMessage(icon, text) {
      Swal.fire({
        icon,
        text,
      });
    },
  },
  getters: {
    filterDatas() {
      if (this.selectReview === '全部') {
        return this.songs;
      } else {
        if (this.selectReview === '未審閱') {
          return this.songs.filter((item) => !item.is_reviewed);
        } else {
          return this.songs.filter((item) => item.is_reviewed);
        }
      }
    },
  },
});
