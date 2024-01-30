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

## 套件

### vue

- vue-rounter 路由
- pinia 狀態管理

#### 其他

- axios
- aos
- sweetalert2
- gh-pages
