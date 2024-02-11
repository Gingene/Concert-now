import { defineStore } from 'pinia';
import Swal from 'sweetalert2';
import useApiData from '@/hooks/useApiData';
import { useDebounceFn } from '@vueuse/core';

const { httpData } = useApiData();

export const songsStore = defineStore('songsStore', {
  state: () => ({
    selectReview: '未審閱',
    sortInitial: true,
    controlCheckAll: true,
    songCheckList: [],
    songs: [],
    backupDatas: [],
    mapSongs: {},
    userId1: {
      email: '1@gmail.com',
    },
  }),
  actions: {
    getSongs(thePath) {
      httpData('get', thePath).then((res) => {
        for (const i of res.data) {
          i.id = i.id.toString();
        }
        this.songs = [...res.data];
        this.backupDatas = [...res.data];
        this.mapSongs = Object.groupBy([...res.data], ({ concert }) => concert.title);
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
        this.songs = [...this.backupDatas];
        if (e.target.value === '') return;
        // const songContents = this.songs.filter((item) => item.name.match(e.target.value));
        // const songUser = this.songs.filter(() => this.userId1.email.match(e.target.value));
        const regex = new RegExp(e.target.value, 'i');
        const songContents = this.songs.filter((item) => regex.test(item.name));
        const songUser = this.songs.filter(() => regex.test(this.userId1.email));
        this.songs = [...songContents, ...songUser];
      },
      500,
      { maxWait: 2000 },
    ),
    // comment 操作
    deleteSong(id) {
      console.log(id);
      const index = this.songs.findIndex((item) => item.id === id);
      this.songs.splice(index, 1);
      this.alertMessage('success', '評論已刪除');
    },
    warnUser(id) {
      console.log(id);
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
