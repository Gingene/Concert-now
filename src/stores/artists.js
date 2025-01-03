import { defineStore } from 'pinia';
import { postFollowConcets, deleteFollowConcets } from '@/api';

export const useArtistsStore = defineStore('artists', {
  state: () => {
    return {
      // 用於首頁自行挑選的6組藝人，image與資料庫中的不同
      artists: [
        {
          id: 11,
          name: 'Itzy',
          image: 'https://i.imgur.com/yxpSEBX.jpeg',
          followers: 40192,
          intro:
            'Itzy 是韓國女子音樂團體，由 JYP 娛樂於 2019 年成立。以活潑、性感的形象聞名，歌曲風格融合流行、嘻哈和舞曲元素。成員包括 Ryujin、Yeji、Chaeryeong、Yuna 和 Lia，粉絲被稱為「Midzy」。活躍於音樂、廣告和時尚領域，吸引了廣泛關注。',
        },
        {
          id: 5,
          name: '溫蒂漫步',
          image: 'https://i.imgur.com/1w27w5u.jpeg',
          followers: 3927,
          intro:
            '溫蒂漫步，成立於 2018 年的五人台灣樂團，成員由貝斯兼主唱江楊、吉他手兼主唱曾妮、吉他手瑋翔、鍵盤手曜如及鼓手阿叡組成。曲風融合 Dream pop、Slow Rock、迷幻...等。以一首〈我想和你一起〉孤峰突起，「我想和你一起，趕走天上的烏雲，從那沙灘上驚醒……」輕輕柔柔的呢喃，在疫情亂世中帶來了一抹溫暖與浪漫。這首從編曲至歌詞都浪漫到無可救藥的「神曲」，是團內唯一的女生—主唱兼吉他手曾妮的創作。',
        },
        {
          id: 2,
          name: 'Apink',
          image: 'https://i.imgur.com/BxG8f6P.jpeg',
          followers: 49270,
          intro:
            'Apink（에이핑크）是一支來自韓國的女子音樂團體，由 Cube 娛樂於 2011 年成立。團體以清新可愛的形象和音樂風格而聞名，成員包括朴初瓏、尹普美、鄭恩地、申在熙、吳夏榮和金南珠。Apink 的音樂作品通常充滿陽光活潑的氛圍，代表曲目包括《Mr. Chu》、《LUV》和《NoNoNo》等。她們在韓國和國際上都獲得了廣泛的支持，並以穩定的音樂表現和可愛形象在 K-pop 界占有一席之地。',
        },
        {
          id: 7,
          name: 'YOASOBI',
          image: 'https://i.imgur.com/miVeAVr.jpeg',
          followers: 52380,
          intro:
            'YOASOBI（日語：YOASOBI／ヨアソビ*/?）是 2019 年結成的日本雙人音樂組合，由使用 VOCALOID 作曲的作曲家 Ayase、以及本業為創作歌手的 ikura 組成。其特色為將在日本索尼音樂娛樂所經營的小說及插畫網站「monogatary.com」中的原作「小說音樂化」[1][2]。團名的原意為「在夜晚玩耍」（夜遊び），由於兩位團員本來都有各自的音樂工作，因此兩人把原本各自的工作定義為「早上的活動」，反之這個音樂組合則是「晚上的活動」，因此命名[1]。其最新作品「アイドル」在發布一週後獲得了 3 千萬點閱，截至 2024/1/31 共獲得了 4.2 億點閱。',
        },
        {
          id: 12,
          name: '理想混蛋',
          image: 'https://i.imgur.com/dKHPtCY.jpeg',
          followers: 14702,
          intro:
            '理想混蛋是台灣男子樂團，音樂風格以流行、民謠見長，強調「以簡單的音樂，說深刻的感動」。團員中有一名醫師與兩名藥師，被台灣媒體喻為真人版「機智醫生生活」。成員包括有雞丁、阿哲、建廷、Look。2018 年以〈行星〉、〈不是因為天氣晴朗才愛你〉，在 StreetVoice 年度人氣歌曲排行榜前三名中搶下兩席。',
        },
        {
          id: 9,
          name: 'HYBS',
          image: 'https://i.imgur.com/UGVUsOq.jpg',
          followers: 21092,
          intro:
            'HYBS 是一組來自泰國曼谷的雙人樂團，由 Alyn Wee 和 Karn Kasidej 組成。 他們的音樂創作融合了近年相當流行的 City Pop、Chill R&B、Lofi 等元素，呈現出充滿濃郁懷舊感的特色。 在歌曲的編曲中，可以感受到有趣且前衛的效果器變化，為他們的音樂風格增添了獨特的層次。',
        },
      ],
    };
  },
  actions: {
    async postFollowConcetsData(id) {
      try {
        await postFollowConcets(id);
        // console.log(res);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteFollowConcetsData(id) {
      try {
        await deleteFollowConcets(id);
        // console.log(res);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
