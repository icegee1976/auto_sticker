# LINE Sticker Forge

一個本機端 LINE 貼圖產生器，整合三種工作流：

- 智慧自動辨識：用去背底色當分界，自動找出 AI 大圖中的貼圖數量與位置，不再依賴固定格線。
- 固定格線裁切：支援 6×4、5×4、4×3、自訂欄列，適合真的排版整齊的貼圖表。
- LINE 貼圖規格輸出：批次去背、裁透明邊、縮放成 PNG，並打包 `main.png`、`tab.png`、`01.png` 等 LINE ZIP。
- `sticker-convert` 橋接：產生並提供 PowerShell wrapper，可用來下載 LINE 貼圖包或轉往 Telegram、WhatsApp、Signal 等平台。

## 快速開始

```powershell
.\start.ps1
```

然後開啟終端機顯示的 localhost 網址。也可以直接開 `index.html`，但 localhost 對剪貼簿與下載流程較穩。

## 主要功能

- 上傳單張 AI 大圖，依背景色自動辨識貼圖物件並切片。
- 勾選多張自動辨識切片後手動合併，適合文字與角色距離較遠而被分成兩張的情況。
- 用裁切外擴與邊緣清理控制邊界，降低雜訊或相鄰貼圖像素被一起帶入的機率。
- 對整齊圖表可切回固定格線模式，套用格線偏移、縮放、單格內縮後切片。
- 上傳多張單圖，直接批次轉為統一 LINE PNG。
- 自動角落取樣去背，並內建綠幕、白底、黑底與自訂色鍵。
- 保留透明背景、裁透明邊、預設輸出 370×270，也可改為 LINE 最大靜態 370×320、動態貼圖單幀 320×270、大貼圖 396×660 或自訂尺寸。
- 選擇 main / tab 封面後產生 LINE 上傳 ZIP。
- 額外產生專案 ZIP，包含 manifest、Prompt 與 sticker-convert 命令。
- 產生英文上架 metadata：Title、Description、Tags；Title 限 40 字、Description 限 160 字，並可下載貼圖總覽圖給 ChatGPT / vision model 進一步辨識。

## 跨平台轉換

網頁內的 `sticker-convert` 面板會產生命令。第一次執行橋接腳本時會建立 `.venv-sticker-convert` 並安裝套件。

```powershell
.\tools\sticker-convert-bridge.ps1 -DownloadLine "https://store.line.me/stickershop/product/1234/zh-Hant" -Preset line
```

## 參考來源

- LINE Creators Market 規格：靜態貼圖支援 8 / 16 / 24 / 32 / 40 張，貼圖 PNG 最大 370×320，main 240×240，tab 96×74。
- Meiko LINE 貼圖自動化助手：AI 網格圖、Prompt、去背、main/tab 與 ZIP 工作流。
- `laggykiller/sticker-convert`：多平台下載、轉檔、壓縮與 CLI/GUI 工作流。
- `gnehs/line-sticker-convert`：簡單資料夾輸入、輸出 LINE 可用圖片的批次轉換概念。

## 注意

LINE 貼圖仍需到 LINE Creators Market 手動送審。若 AI 生圖模型無法穩定排出等距網格，請優先使用「智慧自動辨識」；只有在圖片排列非常整齊時才使用「固定格線裁切」。若文字與角色被拆成兩張，選取那幾張後按「合併選取」；若框線吃到隔壁像素，先降低「裁切外擴」，再提高「邊緣清理」。
