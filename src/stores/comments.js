import { defineStore } from 'pinia';
import Swal from 'sweetalert2';
import { useDebounceFn } from '@vueuse/core';
import useApiData from '@/hooks/useApiData';

const { httpData } = useApiData();

export const commentStore = defineStore('commentStore', {
  state: () => ({
    commentCheckList: [],
    selectReview: '未審閱',
    warningReason: '',
    sortInitial: true,
    controlCheckAll: true,
    backupDatas: [],
    comments: [
      {
        id: '1',
        report_num: 0,
        comment: '距離非常近，可以握到手！',
        isReview: false,
        venueId: {
          title: '台北國際會議中心TICC',
        },
        userId1: {
          email: 'nobugtoday@gmail.com',
        },
      },
      {
        id: '2',
        report_num: 0,
        comment: '場地佈置太爛的吧，超大布條擋住視線1',
        isReview: false,
        venueId: {
          title: '台北國際會議中心TICC',
        },
        userId1: {
          email: 'Joanna4535@gmail.com',
        },
      },
      {
        id: '3',
        report_num: 1,
        comment: '有點遠，建議帶望遠鏡',
        isReview: false,
        venueId: {
          title: '台北國際會議中心TICC',
        },
        userId1: {
          email: 'shlie0223@gmail.com',
        },
      },
      {
        id: '4',
        report_num: 0,
        comment: '前面有柱子擋住，根本看不太到舞台，傻眼',
        isReview: false,
        venueId: {
          title: '新北工商展覽中心',
        },
        userId1: {
          email: 'forev0ry0ung@gmail.com',
        },
      },
      {
        id: '5',
        report_num: 0,
        comment: '接得到舞台丟下來的禮物！超讚的！',
        isReview: false,
        venueId: {
          title: '新北工商展覽中心',
        },
        userId1: {
          email: 'linda751027@gmail.com',
        },
      },
      {
        id: '6',
        report_num: 31,
        comment: '我喜歡吃可麗餅',
        isReview: false,
        venueId: {
          title: '新北工商展覽中心',
        },
        userId1: {
          email: 'mkgd456w@gmail.com',
        },
      },
      {
        id: '7',
        report_num: 1,
        comment: '靠近右邊離音響好近，好大聲，不舒服',
        isReview: false,
        venueId: {
          title: '台北流行音樂中心',
        },
        userId1: {
          email: 'japanlover13@gmail.com',
        },
      },
      {
        id: '8',
        report_num: 0,
        comment: '視野很好，而且是有座位的，很不錯',
        isReview: false,
        venueId: {
          title: '台北流行音樂中心',
        },
        userId1: {
          email: '8sqf4ht8@gmail.com',
        },
      },
      {
        id: '9',
        report_num: 0,
        comment: '空間寬敞，也看得很清楚',
        isReview: false,
        venueId: {
          title: '台北流行音樂中心',
        },
        userId1: {
          email: 'dgfo88w67@gmail.com',
        },
      },
      {
        id: '10',
        report_num: 0,
        comment: '空間寬敞，站在噴霧旁邊超衰的',
        isReview: false,
        venueId: {
          title: '高雄流行音樂中心',
        },
        userId1: {
          email: 'nemo19001225@gmail.com',
        },
      },
      {
        id: '11',
        report_num: 25,
        comment: '香雞排好香，想ㄘ',
        isReview: false,
        venueId: {
          title: '高雄流行音樂中心',
        },
        userId1: {
          email: 'opgf33687@gmail.com',
        },
      },
      {
        id: '12',
        report_num: 0,
        comment: '很遠，要帶望遠鏡。而且很偏，看不是很清楚',
        isReview: false,
        venueId: {
          title: '高雄流行音樂中心',
        },
        userId1: {
          email: '1fgh5962@gmail.com',
        },
      },
      {
        id: '13',
        report_num: 0,
        comment: '場地不大，前面好擠',
        isReview: false,
        venueId: {
          title: 'Legacy Taichung',
        },
        userId1: {
          email: 'podf555j5j3@gmail.com',
        },
      },
      {
        id: '14',
        report_num: 0,
        comment: '視野很不錯，離舞台好近好讚',
        isReview: false,
        venueId: {
          title: 'Legacy Taichung',
        },
        userId1: {
          email: 'oih44nm14@gmail.com',
        },
      },
      {
        id: '15',
        report_num: 0,
        comment: '好遠，應援布條舞台應該看不太到QQ',
        isReview: false,
        venueId: {
          title: 'Legacy Taichung',
        },
        userId1: {
          email: 'gogogo841213@gmail.com',
        },
      },
    ],
  }),
  actions: {
    getComments(thePath) {
      httpData('get', thePath).then((res) => {
        for (const i of res.data) {
          i.id = i.id.toString();
        }
        this.comments = [...res.data];
        this.backupDatas = [...this.comments];
      });
    },
    checkReview(id) {
      const comment = this.comments.find((comment) => comment.id === id);
      comment.isReview = true;
    },
    chagneCheckList(id) {
      const comment = this.comments.find((comment) => comment.id === id);
      const check = this.commentCheckList.findIndex((item) => item.id === id);
      if (check === -1) {
        this.commentCheckList.push(comment);
      } else {
        this.commentCheckList.splice(check, 1);
      }
    },
    checkSelectReview() {
      this.controlCheckAll = false;
      const allCheckBox = document.querySelectorAll('[role="checkbox"]');
      this.commentCheckList.forEach((item) => {
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
    allCheckList() {
      if (!this.controlCheckAll) return;
      const allCheckBox = document.querySelectorAll('[role="checkbox"]');

      allCheckBox.forEach((button, index) => {
        if (index !== 0) {
          if (button.dataset.state !== allCheckBox[0].dataset.state) return;
          button.click();
        }
      });
    },

    deleteSelectReview() {
      this.controlCheckAll = false;
      const allCheckBox = document.querySelectorAll('[role="checkbox"]');
      this.commentCheckList.forEach((item) => {
        this.deleteComment(item.id);
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
    sortCommentByReportNum() {
      this.sortInitial = !this.sortInitial;
      if (this.sortInitial) {
        this.comments.sort((a, b) => a.report_num - b.report_num);
      } else {
        this.comments.sort((a, b) => b.report_num - a.report_num);
      }
    },
    backupData() {
      this.backupDatas = [...this.comments];
    },
    searchComment: useDebounceFn(
      function (e) {
        this.comments = [...this.backupDatas];
        if (e.target.value === '') return;
        // const commentContents = this.comments.filter((item) => {
        //   const regex = new RegExp(e.target.value, 'i');
        //   return regex.test(item.venueId.title);
        // });
        // const commentUser = this.comments.filter((item) => item.userId1.email.match(e.target.value));
        const regex = new RegExp(e.target.value, 'i');
        const commentContents = this.comments.filter((item) => regex.test(item.venueId.title));
        const commentUser = this.comments.filter((item) => regex.test(item.userId1.email));

        this.comments = [...commentContents, ...commentUser];
      },
      500,
      { maxWait: 2000 },
    ),
    // comment 操作
    deleteComment(id) {
      // console.log(id);
      const index = this.comments.findIndex((item) => item.id === id);
      this.comments.splice(index, 1);
      this.alertMessage('success', '評論已刪除');
    },
    warnUser(id, userId) {
      // console.log(userId);
      if (this.warningReason === '') {
        this.alertMessage('error', '請輸入警告理由');
        return;
      }
      this.deleteComment(id);
      this.alertMessage('success', `對${userId.email}使用者警告已送出`);
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
        return this.comments;
      } else {
        if (this.selectReview === '未審閱') {
          return this.comments.filter((item) => !item.isReview);
        } else {
          return this.comments.filter((item) => item.isReview);
        }
      }
    },
  },
});
