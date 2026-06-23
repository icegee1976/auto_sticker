# LINE Sticker Forge

一個本機端 LINE 貼圖產生器，整合三種工作流：

- AI 生成網格圖切割：支援 6×4、5×4、4×3、自訂欄列，適合 Gemini / ChatGPT / 其他生圖工具一次輸出整張貼圖表。
- LINE 貼圖規格輸出：批次去背、裁透明邊、縮放成 PNG，並打包 `main.png`、`tab.png`、`01.png` 等 LINE ZIP。
- `sticker-convert` 橋接：產生並提供 PowerShell wrapper，可用來下載 LINE 貼圖包或轉往 Telegram、WhatsApp、Signal 等平台。

## 快速開始

```powershell
.\start.ps1
```

然後開啟終端機顯示的 localhost 網址。也可以直接開 `index.html`，但 localhost 對剪貼簿與下載流程較穩。

## 主要功能

- 上傳單張 AI 網格圖，套用格線偏移、縮放、單格內縮後切片。
- 上傳多張單圖，直接批次轉為統一 LINE PNG。
- 自動角落取樣去背，並內建綠幕、白底、黑底與自訂色鍵。
- 保留透明背景、裁透明邊、輸出靜態貼圖 370×320、動態貼圖單幀 320×270、大貼圖 396×660 或自訂尺寸。
- 選擇 main / tab 封面後產生 LINE 上傳 ZIP。
- 額外產生專案 ZIP，包含 manifest、Prompt 與 sticker-convert 命令。

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

LINE 貼圖仍需到 LINE Creators Market 手動送審。若要做 24 張，建議直接用 6×4 網格；若 AI 生圖模型不容易穩定排出 24 格，也可以先做 20 張 5×4，再用第二張網格補 4 張並整理編號。
