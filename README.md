# project Concert now for hexSchool

This template should help get you started developing with Vue 3 in Vite.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## 環境變數設定

請先複製下面命令到終端機輸入

```sh
cp .env.example .env
```

若沒有產生.env文件的話請自行複製一份.env.example並改名成.env  
並且將Postman的伺服器url做替換

## 套件

**Skills 主要技術**

- HTML5
- CSS3
- Tailwind CSS 框架
- JavaScript 開發工具
- Vue.js 框架 with options API
- SCSS 預處理器
- Pinia 狀態管理
- Axios
- Git 版本控制
- Vite 開發工具

---

**Plugin 套件/函式庫**

- [Vue Router](https://router.vuejs.org/) Vue.js 的官方路由
- [shadcn-vue](https://www.shadcn-vue.com/) UI 庫
- [Vee-validate/zod](https://vee-validate.logaretm.com/v4/integrations/zod-schema-validation/) 表單驗證
- [AOS](https://github.com/michalsnik/aos) 滾動動畫
- [Swiper](https://swiperjs.com/) 輪播動畫
- [Moment.js](https://momentjs.com/) 時間處理
- [C3.js](https://c3js.org/) 圖表
- [SweetAlert2](https://sweetalert2.github.io/) 彈出視窗

---

**輔助工具**

- Prettier 程式碼格式化工具
- ESLint 程式碼語法檢查工具
- Git Flow 概念規劃分支模型
- git-cz 統一 commit 格式
- VueUse 簡單強大的功能型 hook 庫
- gh-pages 部署

---

### **前台畫面**

**Header**

- 點擊 search now 打開 modal 直接搜尋演唱會、表演者、場地
- 導覽列連結各頁面
- 登入前 login 按鈕連結 login 頁面
- 登入後 hover 使用者/管理者按鈕連結個人頁面、管理後台(需要管理員權限)和登出
- RWD 點擊漢堡按鈕出現導覽列，點擊人物 icon 出現使用者/管理者按鈕連結個人頁面、管理後台(需要管理員權限)和登出

**首頁**

- Header 區域的 search now 按鈕會開啟導覽列搜尋 modal
- 演唱會、表演者、場地區塊使用 Swiper 效果呈現靜態資料
- 使用 shadcn-vue Popover 元件，做歌曲區塊點擊跳出文字提示
- 每個區塊可以點擊進入獨立頁面

**演唱會頁面**

- banner 的 search bar 可輸入演唱會名稱搜尋
- 篩選按鈕可篩選舉辦時間、表演者國籍
- 點擊演唱會圖片、名稱、查看更多按鈕可進入單一演唱會
- 分頁功能

**單一演唱會頁面**

- 使用 Moment.js 套件處理倒計時器
- 點擊 icon 使用收藏功能
- 在未登入狀態下收藏，會彈跳需登入視窗，並跳轉至登入頁面
- 歌單區塊可新增演唱會歌曲，已舉辦的演唱會才可新增，未登入或尚未舉辦的演唱會無法新增
- 點擊曲目可切換 YouTube 歌曲

**表演者頁面**

- banner 的 search bar 可輸入表演者名稱搜尋
- 篩選按鈕可篩表演者國籍
- 點擊表演者圖片、名稱可進入單一表演者頁面
- 分頁功能

**單一表演者頁面**

- 可點擊追蹤或退追蹤表演者
- 在未登入狀態下會彈跳需登入視窗，並跳轉至登入頁面
- 可瀏覽即將舉辦、已結束的演唱會

**場地頁面**

- banner 的 search bar 可輸入場地名稱搜尋
- 篩選按鈕可篩地區
- 分頁功能
- 點擊場地圖片、名稱、查看更多按鈕可進入單一場地頁面
- 熱門場地區塊 hover 出現場地圖片

**單一場地頁面**

- 左邊篩選按鈕或點擊右邊座位區，出現該座位區相關評論
- 在登入狀態下，可以新增評論、檢舉評論。
- 未登入狀態下會彈跳需登入視窗，並跳轉至登入頁面
- 交通方式以手風琴呈現，點擊觀看各交通路線

**關於我們**

- 展示網站理念、團隊資訊

**登入/註冊頁**

- 登入註冊皆有 VeeValidate、Zod 做表單驗證功能
- 會跳出成功或失敗通知

**會員個人頁**

- 可以點擊瀏覽警告次數提示
- 表演者、演唱會有串 API 顯示追蹤及收藏內容
- 追蹤及收藏內容可以點擊前往該頁面

### 後台畫面

**演唱會資訊管理頁面**

- 輸入演唱會名稱搜尋
- 按鈕篩選表演者國籍、演唱會舉辦時間
- 可以新增演唱會資料

**表演者資訊管理頁面**

- 串 API 瀏覽資訊

**場地資訊管理頁面**

- 串 API 瀏覽資訊

**分析報表頁面**

- C3.js 圖表套件製作，數值為靜態資料
- 用戶瀏覽人數、用戶註冊人數可切換時間顯示

**會員管理頁面**

- 輸入會員姓名及信箱搜尋
- 按鈕篩選會員狀態

**評論管理頁面**

- 按鈕篩選審閱狀態、輸入場地名稱或用戶信箱搜尋靜態資料。
- 可點擊切換審閱狀態、進行單筆或多筆刪除並警告使用者。

**歌單管理頁面**

- 串API資料，點擊按鈕篩選審閱狀態、指定演唱會，可輸入用戶信箱搜尋。
- 可點擊切換審閱狀態、進行單筆或多筆刪除並警告使用者。

**設定頁面**

- 皆為靜態資料，沒有串API

## git 步驟 (參考)

pull origin dev後，在dev分支上新增分支

```
git checkout -b "feature/分支名"
```

```
git add .
git-cz(取代git commit)
npm run lint 檢查語法錯誤(修正自己寫的程式碼錯誤不需要處理其他錯誤)
npm run format(推薦使用)
git push origin feature/分支名
```

## UI元件庫

請到./src/components/ui中尋找並搭配[官方網站](https://www.shadcn-vue.com/docs/components/accordion.html)使用  
若還沒有安裝的情況請自行安裝沒有關係

## 主題色

目前分為前台主題和後台(admin)主題可供設定  
現在直接判斷路由直接設定主題色  
如果你還沒有很確定顏色的話可以設定的primary和secondary顏色等待主題色確定  
但你很確定要的顏色請直接使用tailwind的顏色語法直接定好  
有需要客製化的顏色例如success或warning請先測試完後，上傳分支等待開會後合併

## 備份暫時用不到的檔案

有可能你寫了一些程式碼發現現在用不上你可以先放進這個資料夾  
等待未來某天可能會用上
