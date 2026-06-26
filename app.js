(() => {
  const $ = (id) => document.getElementById(id);

  const els = {
    modeAuto: $("modeAuto"),
    modeGrid: $("modeGrid"),
    modeBatch: $("modeBatch"),
    autoDrop: $("autoDrop"),
    gridDrop: $("gridDrop"),
    batchDrop: $("batchDrop"),
    autoControls: $("autoControls"),
    gridControls: $("gridControls"),
    gridFile: $("gridFile"),
    batchFiles: $("batchFiles"),
    gridPreset: $("gridPreset"),
    colsInput: $("colsInput"),
    rowsInput: $("rowsInput"),
    startInput: $("startInput"),
    offsetX: $("offsetX"),
    offsetY: $("offsetY"),
    sourceScale: $("sourceScale"),
    cellTrim: $("cellTrim"),
    mergeGap: $("mergeGap"),
    minArea: $("minArea"),
    cropMargin: $("cropMargin"),
    edgeCleanup: $("edgeCleanup"),
    offsetXLabel: $("offsetXLabel"),
    offsetYLabel: $("offsetYLabel"),
    scaleLabel: $("scaleLabel"),
    cellTrimLabel: $("cellTrimLabel"),
    mergeGapLabel: $("mergeGapLabel"),
    minAreaLabel: $("minAreaLabel"),
    cropMarginLabel: $("cropMarginLabel"),
    edgeCleanupLabel: $("edgeCleanupLabel"),
    sliceButton: $("sliceButton"),
    resetButton: $("resetButton"),
    sampleButton: $("sampleButton"),
    previewCanvas: $("previewCanvas"),
    emptyState: $("emptyState"),
    previewTitle: $("previewTitle"),
    sourceMeta: $("sourceMeta"),
    pieceSelectionStatus: $("pieceSelectionStatus"),
    mergePiecesButton: $("mergePiecesButton"),
    clearSelectionButton: $("clearSelectionButton"),
    pieceGrid: $("pieceGrid"),
    profileSelect: $("profileSelect"),
    customSizeRow: $("customSizeRow"),
    customW: $("customW"),
    customH: $("customH"),
    removeBg: $("removeBg"),
    trimTransparent: $("trimTransparent"),
    despill: $("despill"),
    bgPreset: $("bgPreset"),
    bgColor: $("bgColor"),
    tolerance: $("tolerance"),
    feather: $("feather"),
    padding: $("padding"),
    toleranceLabel: $("toleranceLabel"),
    featherLabel: $("featherLabel"),
    paddingLabel: $("paddingLabel"),
    processButton: $("processButton"),
    progressBar: $("progressBar"),
    validationList: $("validationList"),
    resultGrid: $("resultGrid"),
    downloadLineZip: $("downloadLineZip"),
    downloadProjectZip: $("downloadProjectZip"),
    promptTab: $("promptTab"),
    metadataTab: $("metadataTab"),
    cliTab: $("cliTab"),
    specTab: $("specTab"),
    promptPanel: $("promptPanel"),
    metadataPanel: $("metadataPanel"),
    cliPanel: $("cliPanel"),
    specPanel: $("specPanel"),
    promptCount: $("promptCount"),
    promptTheme: $("promptTheme"),
    promptStyle: $("promptStyle"),
    promptText: $("promptText"),
    copyPrompt: $("copyPrompt"),
    metadataSubject: $("metadataSubject"),
    metadataTheme: $("metadataTheme"),
    metadataStyle: $("metadataStyle"),
    metadataKeywords: $("metadataKeywords"),
    generateMetadata: $("generateMetadata"),
    downloadContactSheet: $("downloadContactSheet"),
    metadataTitle: $("metadataTitle"),
    metadataTitleCount: $("metadataTitleCount"),
    metadataDescription: $("metadataDescription"),
    metadataDescriptionCount: $("metadataDescriptionCount"),
    metadataTags: $("metadataTags"),
    metadataVisionPrompt: $("metadataVisionPrompt"),
    copyMetadata: $("copyMetadata"),
    copyVisionPrompt: $("copyVisionPrompt"),
    lineUrl: $("lineUrl"),
    exportPlatform: $("exportPlatform"),
    cliText: $("cliText"),
    copyCli: $("copyCli"),
    footerStatus: $("footerStatus")
  };

  const profiles = {
    smart: { label: "標準貼圖", width: 370, height: 270, counts: [8, 16, 24, 32, 40], maxBytes: 1024 * 1024 },
    static: { label: "靜態貼圖", width: 370, height: 320, counts: [8, 16, 24, 32, 40], maxBytes: 1024 * 1024 },
    "animated-frame": { label: "動態貼圖單幀", width: 320, height: 270, counts: [8, 16, 24], maxBytes: 1024 * 1024 },
    big: { label: "大貼圖", width: 396, height: 660, counts: [8, 16, 24, 32, 40], maxBytes: 1024 * 1024 },
    custom: { label: "自訂", width: 370, height: 270, counts: [8, 16, 20, 24, 32, 40], maxBytes: 1024 * 1024 }
  };

  const promptThemes = {
    daily: {
      label: "日常回覆",
      words: "早安、晚安、謝謝、收到、OK、辛苦了、沒問題、等等、太棒了、抱歉、加油、笑死",
      mood: "明亮、親切、適合日常聊天"
    },
    work: {
      label: "上班族",
      words: "收到、馬上改、開會中、準時下班、加班、心累、求救、報告長官、已寄出、再確認、沒問題、辛苦了",
      mood: "辦公室情境、表情誇張、有幽默感"
    },
    pet: {
      label: "萌寵",
      words: "喵、汪、餓了、求罐罐、討摸摸、已讀、睡覺、不想動、看什麼、好乖、撒嬌、出門玩",
      mood: "圓潤可愛、動作清楚、情緒直接"
    },
    creator: {
      label: "創作者社群",
      words: "開播、剪片中、已上架、訂閱一下、靈感來了、爆肝、修圖、先存檔、發文、成交、私訊我、感謝支持",
      mood: "創作工作流、社群互動、節奏活潑"
    },
    custom: {
      label: "自訂角色",
      words: "早安、收到、謝謝、OK、加油、等等、好耶、抱歉、出發、完成、笑死、晚安",
      mood: "角色一致、動作多樣、辨識度高"
    }
  };

  const promptStyles = {
    q: "可愛 Q 版、粗白色貼紙外框、色彩飽和、角色表情明確",
    "3d": "3D 公仔質感、圓潤材質、柔和棚拍光、粗白色貼紙外框",
    flat: "扁平插畫、乾淨線條、高對比配色、粗白色貼紙外框",
    watercolor: "水彩手繪、柔和紙感、保留清楚輪廓、粗白色貼紙外框",
    pixel: "復古像素風、方格筆觸、清楚輪廓、粗白色貼紙外框"
  };

  const metadataThemes = {
    daily: {
      title: "Daily Chat",
      description: "everyday chats",
      tags: ["daily", "chat", "greeting", "thank you", "apology", "encouragement", "reaction"]
    },
    greetings: {
      title: "Greetings",
      description: "warm greetings and friendly check-ins",
      tags: ["greeting", "hello", "good morning", "good night", "friendly", "daily"]
    },
    reactions: {
      title: "Reaction",
      description: "playful reactions, quick replies, and expressive moments",
      tags: ["reaction", "reply", "funny", "emotion", "playful", "chat"]
    },
    work: {
      title: "Work Chat",
      description: "workday messages, quick replies, encouragement, and team chats",
      tags: ["work", "office", "reply", "team", "encouragement", "daily"]
    },
    pet: {
      title: "Pet Lover",
      description: "pet lovers, cute moments, greetings, and expressive daily chats",
      tags: ["pet", "cute", "animal", "daily", "greeting", "reaction"]
    },
    custom: {
      title: "Chat",
      description: "daily conversations and expressive chats",
      tags: ["chat", "daily", "cute", "sticker", "reaction"]
    }
  };

  const state = {
    mode: "auto",
    source: null,
    pieces: [],
    results: [],
    selectedPieceIds: new Set(),
    mainIndex: 0,
    tabIndex: 0,
    isProcessing: false
  };

  function setStatus(text) {
    els.footerStatus.textContent = text;
  }

  function clamp(num, min, max) {
    return Math.max(min, Math.min(max, num));
  }

  function intValue(el, fallback, min, max) {
    const next = Number.parseInt(el.value, 10);
    if (Number.isNaN(next)) return fallback;
    return clamp(next, min, max);
  }

  function floatValue(el, fallback) {
    const next = Number.parseFloat(el.value);
    return Number.isNaN(next) ? fallback : next;
  }

  function twoDigit(num) {
    return String(num).padStart(2, "0");
  }

  function getProfile() {
    const base = profiles[els.profileSelect.value] || profiles.smart;
    if (els.profileSelect.value !== "custom") return base;
    return {
      ...base,
      width: intValue(els.customW, 370, 1, 4000),
      height: intValue(els.customH, 270, 1, 4000)
    };
  }

  function getGrid() {
    return {
      cols: intValue(els.colsInput, 5, 1, 10),
      rows: intValue(els.rowsInput, 4, 1, 10),
      offsetX: floatValue(els.offsetX, 0) / 100,
      offsetY: floatValue(els.offsetY, 0) / 100,
      scale: floatValue(els.sourceScale, 100) / 100,
      cellTrim: floatValue(els.cellTrim, 0) / 100
    };
  }

  function setProgress(ratio) {
    els.progressBar.querySelector("span").style.width = `${Math.round(clamp(ratio, 0, 1) * 100)}%`;
  }

  function updateLabels() {
    els.offsetXLabel.textContent = `${els.offsetX.value}%`;
    els.offsetYLabel.textContent = `${els.offsetY.value}%`;
    els.scaleLabel.textContent = `${els.sourceScale.value}%`;
    els.cellTrimLabel.textContent = `${els.cellTrim.value}%`;
    els.mergeGapLabel.textContent = `${els.mergeGap.value}px`;
    els.minAreaLabel.textContent = `${Number(els.minArea.value).toFixed(2)}%`;
    els.cropMarginLabel.textContent = `${Number(els.cropMargin.value).toFixed(1).replace(".0", "")}%`;
    els.edgeCleanupLabel.textContent = `${Number(els.edgeCleanup.value).toFixed(1).replace(".0", "")}%`;
    els.toleranceLabel.textContent = els.tolerance.value;
    els.featherLabel.textContent = els.feather.value;
    els.paddingLabel.textContent = `${els.padding.value}px`;
    els.customSizeRow.classList.toggle("hidden", els.profileSelect.value !== "custom");
  }

  function setMode(mode) {
    state.mode = mode;
    els.modeAuto.classList.toggle("is-active", mode === "auto");
    els.modeGrid.classList.toggle("is-active", mode === "grid");
    els.modeBatch.classList.toggle("is-active", mode === "batch");
    els.autoDrop.classList.toggle("hidden", mode !== "auto");
    els.gridDrop.classList.toggle("hidden", mode !== "grid");
    els.batchDrop.classList.toggle("hidden", mode !== "batch");
    els.autoControls.classList.toggle("hidden", mode !== "auto");
    els.gridControls.classList.toggle("hidden", mode !== "grid");
    updatePieceActionState();
    els.sliceButton.innerHTML = mode === "auto"
      ? '<span aria-hidden="true">◎</span> 自動辨識'
      : mode === "grid"
        ? '<span aria-hidden="true">✂</span> 固定切割'
        : '<span aria-hidden="true">◆</span> 更新預覽';
    drawPreview();
    renderValidation();
  }

  function syncPreset() {
    if (els.gridPreset.value === "6x4") {
      els.colsInput.value = "6";
      els.rowsInput.value = "4";
    } else if (els.gridPreset.value === "5x4") {
      els.colsInput.value = "5";
      els.rowsInput.value = "4";
    } else if (els.gridPreset.value === "4x3") {
      els.colsInput.value = "4";
      els.rowsInput.value = "3";
    }
    drawPreview();
  }

  function resetAdjustments() {
    els.offsetX.value = "0";
    els.offsetY.value = "0";
    els.sourceScale.value = "100";
    els.cellTrim.value = "0";
    els.mergeGap.value = "12";
    els.minArea.value = "0.03";
    els.cropMargin.value = "2";
    els.edgeCleanup.value = "4";
    updateLabels();
    drawPreview();
  }

  function loadImageFile(file) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve({
          img,
          name: file.name,
          width: img.naturalWidth,
          height: img.naturalHeight,
          size: file.size
        });
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error(`無法讀取圖片：${file.name}`));
      };
      img.src = url;
    });
  }

  function canvasFromImage(imageSource) {
    const canvas = document.createElement("canvas");
    canvas.width = imageSource.width;
    canvas.height = imageSource.height;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(imageSource.img, 0, 0, canvas.width, canvas.height);
    return canvas;
  }

  async function handleGridUpload(file) {
    if (!file) return;
    try {
      const source = await loadImageFile(file);
      state.source = source;
      state.pieces = [];
      state.results = [];
      state.selectedPieceIds.clear();
      els.previewTitle.textContent = source.name;
      els.sourceMeta.textContent = `${source.width}×${source.height}`;
      setStatus("來源已載入");
      drawPreview();
      renderPieces();
      renderResults();
      renderValidation();
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleBatchUpload(files) {
    const list = Array.from(files || []);
    if (!list.length) return;
    setMode("batch");
    setStatus("讀取批次圖片");
    const loaded = [];
    for (const file of list) {
      loaded.push(await loadImageFile(file));
    }
    state.source = null;
    state.selectedPieceIds.clear();
    state.pieces = loaded.map((item, index) => ({
      id: index + 1,
      name: item.name,
      canvas: canvasFromImage(item),
      sourceWidth: item.width,
      sourceHeight: item.height
    }));
    state.results = [];
    els.previewTitle.textContent = `批次 ${state.pieces.length} 張`;
    els.sourceMeta.textContent = `${state.pieces.length} files`;
    drawPreview();
    renderPieces();
    renderResults();
    renderValidation();
    setStatus("批次圖片已載入");
  }

  function transformedSourceCanvas() {
    if (!state.source) return null;
    const { width, height, img } = state.source;
    const grid = getGrid();
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.translate(width / 2 + grid.offsetX * width, height / 2 + grid.offsetY * height);
    ctx.scale(grid.scale, grid.scale);
    ctx.drawImage(img, -width / 2, -height / 2, width, height);
    ctx.restore();
    return canvas;
  }

  function sliceGrid() {
    if (!state.source) {
      alert("請先上傳 AI 網格圖。");
      return;
    }
    const sheet = transformedSourceCanvas();
    const grid = getGrid();
    const cellW = sheet.width / grid.cols;
    const cellH = sheet.height / grid.rows;
    const trimX = cellW * grid.cellTrim;
    const trimY = cellH * grid.cellTrim;
    const pieces = [];
    let id = 1;

    for (let row = 0; row < grid.rows; row += 1) {
      for (let col = 0; col < grid.cols; col += 1) {
        const sx = col * cellW + trimX;
        const sy = row * cellH + trimY;
        const sw = Math.max(1, cellW - trimX * 2);
        const sh = Math.max(1, cellH - trimY * 2);
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(sw);
        canvas.height = Math.round(sh);
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        ctx.drawImage(sheet, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
        pieces.push({
          id,
          name: `${twoDigit(id)}.png`,
          canvas,
          sourceWidth: canvas.width,
          sourceHeight: canvas.height
        });
        id += 1;
      }
    }

    state.pieces = pieces;
    state.results = [];
    state.selectedPieceIds.clear();
    state.mainIndex = 0;
    state.tabIndex = 0;
    renderPieces();
    renderResults();
    renderValidation();
    setStatus(`已切割 ${pieces.length} 張`);
  }

  function detectStickers() {
    if (!state.source) {
      alert("請先上傳 AI 大圖。");
      return;
    }

    const sourceCanvas = canvasFromImage(state.source);
    const maxDetectSide = 1800;
    const detectScale = Math.min(1, maxDetectSide / Math.max(sourceCanvas.width, sourceCanvas.height));
    const detectCanvas = document.createElement("canvas");
    detectCanvas.width = Math.max(1, Math.round(sourceCanvas.width * detectScale));
    detectCanvas.height = Math.max(1, Math.round(sourceCanvas.height * detectScale));
    const detectCtx = detectCanvas.getContext("2d", { willReadFrequently: true });
    detectCtx.imageSmoothingEnabled = true;
    detectCtx.imageSmoothingQuality = "high";
    detectCtx.drawImage(sourceCanvas, 0, 0, detectCanvas.width, detectCanvas.height);

    const imageData = detectCtx.getImageData(0, 0, detectCanvas.width, detectCanvas.height);
    const target = resolveTargetColor(imageData);
    const components = findForegroundComponents(imageData, target);
    const merged = mergeDetectionBoxes(components);
    const boxes = sortDetectionBoxes(merged).map((box) => scaleDetectionBox(box, detectScale, sourceCanvas.width, sourceCanvas.height));
    const pieces = boxes.map((box, index) => cropPieceFromBox(sourceCanvas, box, index + 1, { refine: true }));

    state.pieces = pieces;
    state.results = [];
    state.selectedPieceIds.clear();
    state.mainIndex = 0;
    state.tabIndex = 0;
    renderPieces();
    renderResults();
    drawPreview();
    renderValidation();
    setStatus(`自動辨識 ${pieces.length} 張貼圖`);
  }

  function findForegroundComponents(imageData, target) {
    const { data, width, height } = imageData;
    const total = width * height;
    const tolerance = Number(els.tolerance.value);
    const minAreaRatio = Number(els.minArea.value) / 100;
    const minPixels = Math.max(12, Math.round(total * minAreaRatio));
    const mask = new Uint8Array(total);

    for (let p = 0, i = 0; p < total; p += 1, i += 4) {
      if (data[i + 3] < 12) continue;
      const dr = data[i] - target.r;
      const dg = data[i + 1] - target.g;
      const db = data[i + 2] - target.b;
      const dist = Math.sqrt(dr * dr + dg * dg + db * db);
      if (dist > tolerance) mask[p] = 1;
    }

    const stack = new Int32Array(total);
    const components = [];
    const neighbors = [
      [-1, -1], [0, -1], [1, -1],
      [-1, 0],           [1, 0],
      [-1, 1],  [0, 1],  [1, 1]
    ];

    for (let start = 0; start < total; start += 1) {
      if (mask[start] !== 1) continue;

      let top = 0;
      let area = 0;
      let minX = width;
      let minY = height;
      let maxX = 0;
      let maxY = 0;
      mask[start] = 2;
      stack[top] = start;
      top += 1;

      while (top > 0) {
        top -= 1;
        const current = stack[top];
        const x = current % width;
        const y = Math.floor(current / width);
        area += 1;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;

        for (const [dx, dy] of neighbors) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
          const next = ny * width + nx;
          if (mask[next] !== 1) continue;
          mask[next] = 2;
          stack[top] = next;
          top += 1;
        }
      }

      if (area >= minPixels) {
        components.push({
          x: minX,
          y: minY,
          width: maxX - minX + 1,
          height: maxY - minY + 1,
          area
        });
      }
    }

    return components;
  }

  function mergeDetectionBoxes(components) {
    const gap = Number(els.mergeGap.value);
    const boxes = components.map((box) => ({ ...box }));
    let changed = true;

    while (changed) {
      changed = false;
      for (let i = 0; i < boxes.length; i += 1) {
        for (let j = i + 1; j < boxes.length; j += 1) {
          if (!boxesTouch(boxes[i], boxes[j], gap)) continue;
          boxes[i] = unionBoxes(boxes[i], boxes[j]);
          boxes.splice(j, 1);
          changed = true;
          j -= 1;
        }
      }
    }

    return boxes.filter((box) => box.width > 2 && box.height > 2);
  }

  function boxesTouch(a, b, gap) {
    return a.x <= b.x + b.width + gap
      && a.x + a.width + gap >= b.x
      && a.y <= b.y + b.height + gap
      && a.y + a.height + gap >= b.y;
  }

  function unionBoxes(a, b) {
    const x = Math.min(a.x, b.x);
    const y = Math.min(a.y, b.y);
    const right = Math.max(a.x + a.width, b.x + b.width);
    const bottom = Math.max(a.y + a.height, b.y + b.height);
    return {
      x,
      y,
      width: right - x,
      height: bottom - y,
      area: (a.area || 0) + (b.area || 0)
    };
  }

  function sortDetectionBoxes(boxes) {
    if (!boxes.length) return [];
    const heights = boxes.map((box) => box.height).sort((a, b) => a - b);
    const medianHeight = heights[Math.floor(heights.length / 2)] || 1;
    const rowTolerance = Math.max(20, medianHeight * 0.55);
    const rows = [];

    for (const box of [...boxes].sort((a, b) => (a.y + a.height / 2) - (b.y + b.height / 2))) {
      const centerY = box.y + box.height / 2;
      let row = rows.find((item) => Math.abs(item.centerY - centerY) <= rowTolerance);
      if (!row) {
        row = { centerY, boxes: [] };
        rows.push(row);
      }
      row.boxes.push(box);
      row.centerY = row.boxes.reduce((sum, item) => sum + item.y + item.height / 2, 0) / row.boxes.length;
    }

    return rows
      .sort((a, b) => a.centerY - b.centerY)
      .flatMap((row) => row.boxes.sort((a, b) => a.x - b.x));
  }

  function scaleDetectionBox(box, detectScale, sourceWidth, sourceHeight) {
    const rawX = box.x / detectScale;
    const rawY = box.y / detectScale;
    const rawW = box.width / detectScale;
    const rawH = box.height / detectScale;
    const marginRatio = Number(els.cropMargin.value) / 100;
    const margin = Math.round(Math.max(rawW, rawH) * marginRatio);
    const x = clamp(Math.floor(rawX - margin), 0, sourceWidth - 1);
    const y = clamp(Math.floor(rawY - margin), 0, sourceHeight - 1);
    const right = clamp(Math.ceil(rawX + rawW + margin), x + 1, sourceWidth);
    const bottom = clamp(Math.ceil(rawY + rawH + margin), y + 1, sourceHeight);
    return {
      x,
      y,
      width: right - x,
      height: bottom - y
    };
  }

  function cropPieceFromBox(sourceCanvas, box, id, options = {}) {
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(box.width);
    canvas.height = Math.round(box.height);
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(sourceCanvas, box.x, box.y, box.width, box.height, 0, 0, canvas.width, canvas.height);
    const finalCanvas = options.refine ? refineDetectedPieceCanvas(canvas) : canvas;
    return {
      id,
      name: `${twoDigit(id)}.png`,
      canvas: finalCanvas,
      sourceWidth: finalCanvas.width,
      sourceHeight: finalCanvas.height,
      bounds: box,
      preprocessed: Boolean(options.refine)
    };
  }

  function refineDetectedPieceCanvas(canvas) {
    let cleaned = removeBackground(canvas);
    cleaned = cleanEdgeArtifacts(cleaned);
    return trimCanvasToAlpha(cleaned, 1);
  }

  function trimCanvasToAlpha(canvas, margin = 0) {
    const bounds = alphaBounds(canvas);
    if (!bounds.hasContent) return canvas;
    const x = clamp(bounds.x - margin, 0, canvas.width - 1);
    const y = clamp(bounds.y - margin, 0, canvas.height - 1);
    const right = clamp(bounds.x + bounds.width + margin, x + 1, canvas.width);
    const bottom = clamp(bounds.y + bounds.height + margin, y + 1, canvas.height);
    const out = document.createElement("canvas");
    out.width = right - x;
    out.height = bottom - y;
    out.getContext("2d", { willReadFrequently: true }).drawImage(canvas, x, y, out.width, out.height, 0, 0, out.width, out.height);
    return out;
  }

  function cleanEdgeArtifacts(canvas) {
    const cleanupRatio = Number(els.edgeCleanup.value) / 100;
    if (cleanupRatio <= 0) return canvas;

    const out = cloneCanvas(canvas);
    const ctx = out.getContext("2d", { willReadFrequently: true });
    const imageData = ctx.getImageData(0, 0, out.width, out.height);
    const components = findAlphaComponents(imageData);
    if (components.length <= 1) return out;

    const totalArea = components.reduce((sum, component) => sum + component.area, 0);
    const limit = Math.max(8, totalArea * cleanupRatio);
    const removal = components.filter((component) => component.touchesEdge && component.area <= limit);
    if (!removal.length || removal.length === components.length) return out;

    for (const component of removal) {
      for (const pixel of component.pixels) {
        imageData.data[pixel * 4 + 3] = 0;
      }
    }
    ctx.putImageData(imageData, 0, 0);
    return out;
  }

  function findAlphaComponents(imageData) {
    const { data, width, height } = imageData;
    const total = width * height;
    const visited = new Uint8Array(total);
    const stack = new Int32Array(total);
    const components = [];
    const neighbors = [
      [-1, -1], [0, -1], [1, -1],
      [-1, 0],           [1, 0],
      [-1, 1],  [0, 1],  [1, 1]
    ];

    for (let start = 0; start < total; start += 1) {
      if (visited[start] || data[start * 4 + 3] <= 12) continue;

      let top = 0;
      let area = 0;
      let touchesEdge = false;
      const pixels = [];
      visited[start] = 1;
      stack[top] = start;
      top += 1;

      while (top > 0) {
        top -= 1;
        const current = stack[top];
        const x = current % width;
        const y = Math.floor(current / width);
        area += 1;
        pixels.push(current);
        if (x <= 1 || y <= 1 || x >= width - 2 || y >= height - 2) touchesEdge = true;

        for (const [dx, dy] of neighbors) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
          const next = ny * width + nx;
          if (visited[next] || data[next * 4 + 3] <= 12) continue;
          visited[next] = 1;
          stack[top] = next;
          top += 1;
        }
      }

      components.push({ area, touchesEdge, pixels });
    }

    return components;
  }

  function drawPreview() {
    updateLabels();
    const canvas = els.previewCanvas;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const width = Math.max(320, Math.round(rect.width));
    const height = Math.max(320, Math.round(rect.height));
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    const hasSource = state.mode === "batch" ? state.pieces.length > 0 : Boolean(state.source);
    els.emptyState.classList.toggle("hidden", hasSource);

    if (state.mode === "batch" && state.pieces.length) {
      drawBatchPreview(ctx, width, height);
      return;
    }

    if (!state.source) return;

    if (state.mode === "auto") {
      drawSourceWithDetectionBoxes(ctx, width, height);
      return;
    }

    const grid = getGrid();
    const pad = 24;
    const scale = Math.min((width - pad * 2) / state.source.width, (height - pad * 2) / state.source.height);
    const drawW = state.source.width * scale;
    const drawH = state.source.height * scale;
    const x = (width - drawW) / 2;
    const y = (height - drawH) / 2;

    ctx.save();
    ctx.translate(x + drawW / 2 + grid.offsetX * drawW, y + drawH / 2 + grid.offsetY * drawH);
    ctx.scale(grid.scale, grid.scale);
    ctx.drawImage(state.source.img, -drawW / 2, -drawH / 2, drawW, drawH);
    ctx.restore();

    ctx.save();
    ctx.strokeStyle = "rgba(6, 199, 85, 0.95)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x, y, drawW, drawH);
    ctx.strokeStyle = "rgba(22, 24, 25, 0.42)";
    ctx.lineWidth = 1;
    for (let col = 1; col < grid.cols; col += 1) {
      const gx = x + (drawW / grid.cols) * col;
      ctx.beginPath();
      ctx.moveTo(gx, y);
      ctx.lineTo(gx, y + drawH);
      ctx.stroke();
    }
    for (let row = 1; row < grid.rows; row += 1) {
      const gy = y + (drawH / grid.rows) * row;
      ctx.beginPath();
      ctx.moveTo(x, gy);
      ctx.lineTo(x + drawW, gy);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawSourceWithDetectionBoxes(ctx, width, height) {
    const pad = 24;
    const scale = Math.min((width - pad * 2) / state.source.width, (height - pad * 2) / state.source.height);
    const drawW = state.source.width * scale;
    const drawH = state.source.height * scale;
    const x = (width - drawW) / 2;
    const y = (height - drawH) / 2;

    ctx.drawImage(state.source.img, x, y, drawW, drawH);
    ctx.save();
    ctx.strokeStyle = "rgba(6, 199, 85, 0.95)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x, y, drawW, drawH);
    ctx.font = "700 12px 'Segoe UI', sans-serif";
    ctx.textBaseline = "top";

    state.pieces.forEach((piece, index) => {
      if (!piece.bounds) return;
      const bx = x + piece.bounds.x * scale;
      const by = y + piece.bounds.y * scale;
      const bw = piece.bounds.width * scale;
      const bh = piece.bounds.height * scale;
      const isSelected = state.selectedPieceIds.has(piece.id);
      ctx.strokeStyle = isSelected
        ? "rgba(240, 139, 52, 0.98)"
        : index === state.mainIndex
          ? "rgba(6, 199, 85, 0.98)"
          : "rgba(39, 110, 241, 0.92)";
      ctx.lineWidth = 2;
      ctx.strokeRect(bx, by, bw, bh);
      ctx.fillStyle = ctx.strokeStyle;
      const label = twoDigit(index + 1);
      const labelW = Math.max(28, ctx.measureText(label).width + 10);
      ctx.fillRect(bx, Math.max(y, by - 18), labelW, 18);
      ctx.fillStyle = "#ffffff";
      ctx.fillText(label, bx + 5, Math.max(y, by - 16));
    });
    ctx.restore();
  }

  function drawBatchPreview(ctx, width, height) {
    const count = Math.min(12, state.pieces.length);
    const cols = Math.min(4, count);
    const rows = Math.ceil(count / cols);
    const gap = 12;
    const cellW = Math.min(160, (width - gap * (cols + 1)) / cols);
    const cellH = Math.min(140, (height - gap * (rows + 1)) / rows);
    const totalW = cols * cellW + (cols - 1) * gap;
    const startX = (width - totalW) / 2;
    const startY = Math.max(24, (height - rows * cellH - (rows - 1) * gap) / 2);

    for (let i = 0; i < count; i += 1) {
      const piece = state.pieces[i];
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = startX + col * (cellW + gap);
      const y = startY + row * (cellH + gap);
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.strokeStyle = "rgba(22,24,25,0.14)";
      ctx.lineWidth = 1;
      ctx.fillRect(x, y, cellW, cellH);
      ctx.strokeRect(x, y, cellW, cellH);
      drawContain(ctx, piece.canvas, x + 8, y + 8, cellW - 16, cellH - 16);
    }
  }

  function drawContain(ctx, sourceCanvas, x, y, width, height) {
    const scale = Math.min(width / sourceCanvas.width, height / sourceCanvas.height);
    const drawW = sourceCanvas.width * scale;
    const drawH = sourceCanvas.height * scale;
    ctx.drawImage(sourceCanvas, x + (width - drawW) / 2, y + (height - drawH) / 2, drawW, drawH);
  }

  function cloneCanvas(sourceCanvas) {
    const clone = document.createElement("canvas");
    clone.width = sourceCanvas.width;
    clone.height = sourceCanvas.height;
    clone.getContext("2d", { willReadFrequently: true }).drawImage(sourceCanvas, 0, 0);
    return clone;
  }

  function renderPieces() {
    els.pieceGrid.innerHTML = "";
    state.pieces.forEach((piece, index) => {
      const isSelected = state.selectedPieceIds.has(piece.id);
      const card = document.createElement("div");
      card.className = `thumb ${isSelected ? "is-selected" : ""}`;
      const preview = cloneCanvas(piece.canvas);
      const footer = document.createElement("div");
      footer.className = "thumb-footer";
      footer.innerHTML = `<span>${twoDigit(index + 1)}</span><span>${piece.canvas.width}×${piece.canvas.height}</span>`;
      const action = document.createElement("div");
      action.className = "pick-row";
      const selectButton = document.createElement("button");
      selectButton.type = "button";
      selectButton.className = `mini-button ${isSelected ? "is-active" : ""}`;
      selectButton.textContent = isSelected ? "已選取" : "選取";
      selectButton.addEventListener("click", () => togglePieceSelection(piece.id));
      action.append(selectButton);
      card.append(preview, footer, action);
      els.pieceGrid.append(card);
    });
    updatePieceActionState();
  }

  function togglePieceSelection(id) {
    if (state.selectedPieceIds.has(id)) {
      state.selectedPieceIds.delete(id);
    } else {
      state.selectedPieceIds.add(id);
    }
    renderPieces();
    drawPreview();
  }

  function clearPieceSelection() {
    state.selectedPieceIds.clear();
    renderPieces();
    drawPreview();
  }

  function updatePieceActionState() {
    const count = state.selectedPieceIds.size;
    els.pieceSelectionStatus.textContent = count ? `已選取 ${count} 張` : "未選取切片";
    els.mergePiecesButton.disabled = count < 2 || !state.source;
    els.clearSelectionButton.disabled = count === 0;
  }

  function mergeSelectedPieces() {
    const selectedIds = new Set(state.selectedPieceIds);
    const selected = state.pieces.filter((piece) => selectedIds.has(piece.id));
    if (selected.length < 2) return;
    if (!state.source || selected.some((piece) => !piece.bounds)) {
      alert("目前只能合併自動辨識產生的切片。");
      return;
    }

    const sourceCanvas = canvasFromImage(state.source);
    const insertIndex = state.pieces.findIndex((piece) => selectedIds.has(piece.id));
    const mergedBounds = selected.map((piece) => piece.bounds).reduce((acc, box) => unionBoxes(acc, box));
    const selectedArea = selected.reduce((sum, piece) => sum + piece.bounds.width * piece.bounds.height, 0);
    const mergedArea = mergedBounds.width * mergedBounds.height;
    if (mergedArea > selectedArea * 10) {
      alert("選取的切片距離太遠，請只合併同一張貼圖中的文字與角色。");
      return;
    }
    const mergedPiece = cropPieceFromBox(sourceCanvas, mergedBounds, 0, { refine: true });
    const nextPieces = state.pieces.filter((piece) => !selectedIds.has(piece.id));
    nextPieces.splice(insertIndex, 0, mergedPiece);

    state.pieces = renumberPieces(nextPieces);
    state.results = [];
    state.selectedPieceIds.clear();
    state.mainIndex = 0;
    state.tabIndex = 0;
    renderPieces();
    renderResults();
    drawPreview();
    renderValidation();
    setStatus(`已合併為 ${state.pieces.length} 張切片，請重新生成 PNG`);
  }

  function renumberPieces(pieces) {
    return pieces.map((piece, index) => ({
      ...piece,
      id: index + 1,
      name: `${twoDigit(index + 1)}.png`
    }));
  }

  function renderResults() {
    els.resultGrid.innerHTML = "";
    state.results.forEach((result, index) => {
      const card = document.createElement("div");
      card.className = "result-card";
      const preview = cloneCanvas(result.canvas);
      const footer = document.createElement("div");
      footer.className = "result-footer";
      footer.innerHTML = `<span>${result.fileName}</span><span>${formatBytes(result.bytes)}</span>`;

      const pick = document.createElement("div");
      pick.className = "pick-row";
      const mainButton = document.createElement("button");
      mainButton.type = "button";
      mainButton.className = `mini-button ${state.mainIndex === index ? "is-active" : ""}`;
      mainButton.textContent = "Main";
      mainButton.addEventListener("click", () => {
        state.mainIndex = index;
        renderResults();
        renderValidation();
      });
      const tabButton = document.createElement("button");
      tabButton.type = "button";
      tabButton.className = `mini-button ${state.tabIndex === index ? "is-active" : ""}`;
      tabButton.textContent = "Tab";
      tabButton.addEventListener("click", () => {
        state.tabIndex = index;
        renderResults();
        renderValidation();
      });
      pick.append(mainButton, tabButton);
      card.append(preview, footer, pick);
      els.resultGrid.append(card);
    });
  }

  function formatBytes(bytes) {
    if (!bytes) return "0 B";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  }

  function resolveTargetColor(imageData) {
    const preset = els.bgPreset.value;
    if (preset === "green") return { r: 0, g: 255, b: 0 };
    if (preset === "white") return { r: 255, g: 255, b: 255 };
    if (preset === "black") return { r: 0, g: 0, b: 0 };
    if (preset === "custom") return hexToRgb(els.bgColor.value);
    return averageCorners(imageData);
  }

  function hexToRgb(hex) {
    const normalized = hex.replace("#", "");
    return {
      r: Number.parseInt(normalized.slice(0, 2), 16),
      g: Number.parseInt(normalized.slice(2, 4), 16),
      b: Number.parseInt(normalized.slice(4, 6), 16)
    };
  }

  function averageCorners(imageData) {
    const { width, height, data } = imageData;
    const sample = Math.max(4, Math.floor(Math.min(width, height) * 0.035));
    const corners = [
      [0, 0],
      [width - sample, 0],
      [0, height - sample],
      [width - sample, height - sample]
    ];
    let r = 0;
    let g = 0;
    let b = 0;
    let n = 0;
    for (const [startX, startY] of corners) {
      for (let y = startY; y < startY + sample; y += 1) {
        for (let x = startX; x < startX + sample; x += 1) {
          const idx = (y * width + x) * 4;
          if (data[idx + 3] < 20) continue;
          r += data[idx];
          g += data[idx + 1];
          b += data[idx + 2];
          n += 1;
        }
      }
    }
    if (!n) return { r: 0, g: 255, b: 0 };
    return { r: r / n, g: g / n, b: b / n };
  }

  function removeBackground(canvas) {
    if (!els.removeBg.checked) return cloneCanvas(canvas);
    const out = cloneCanvas(canvas);
    const ctx = out.getContext("2d", { willReadFrequently: true });
    const imageData = ctx.getImageData(0, 0, out.width, out.height);
    const data = imageData.data;
    const target = resolveTargetColor(imageData);
    const tolerance = Number(els.tolerance.value);
    const feather = Number(els.feather.value);
    const maxDistance = tolerance;
    const featherDistance = Math.max(1, feather);
    const targetIsGreen = target.g > 180 && target.g > target.r * 1.25 && target.g > target.b * 1.25;

    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] === 0) continue;
      const dr = data[i] - target.r;
      const dg = data[i + 1] - target.g;
      const db = data[i + 2] - target.b;
      const dist = Math.sqrt(dr * dr + dg * dg + db * db);
      if (dist <= maxDistance) {
        data[i + 3] = 0;
      } else if (dist < maxDistance + featherDistance) {
        const alphaScale = (dist - maxDistance) / featherDistance;
        data[i + 3] = Math.round(data[i + 3] * alphaScale);
      }

      if (els.despill.checked && targetIsGreen && data[i + 3] > 0) {
        const averageRB = (data[i] + data[i + 2]) / 2;
        if (data[i + 1] > averageRB + 10) {
          data[i + 1] = Math.round((data[i + 1] * 0.35) + (averageRB * 0.65));
        }
      }
    }

    ctx.putImageData(imageData, 0, 0);
    return out;
  }

  function alphaBounds(canvas) {
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const { data, width, height } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let minX = width;
    let minY = height;
    let maxX = -1;
    let maxY = -1;
    let transparentPixels = 0;

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const alpha = data[(y * width + x) * 4 + 3];
        if (alpha < 255) transparentPixels += 1;
        if (alpha > 12) {
          if (x < minX) minX = x;
          if (y < minY) minY = y;
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
        }
      }
    }

    if (maxX < minX || maxY < minY) {
      return {
        x: 0,
        y: 0,
        width,
        height,
        hasContent: false,
        hasTransparency: transparentPixels > 0
      };
    }

    return {
      x: minX,
      y: minY,
      width: maxX - minX + 1,
      height: maxY - minY + 1,
      hasContent: true,
      hasTransparency: transparentPixels > 0
    };
  }

  function fitToOutput(canvas) {
    const profile = getProfile();
    const padding = clamp(Number(els.padding.value), 0, Math.min(profile.width, profile.height) / 3);
    const bounds = els.trimTransparent.checked ? alphaBounds(canvas) : {
      x: 0,
      y: 0,
      width: canvas.width,
      height: canvas.height,
      hasContent: true,
      hasTransparency: alphaBounds(canvas).hasTransparency
    };

    const out = document.createElement("canvas");
    out.width = profile.width % 2 === 0 ? profile.width : profile.width + 1;
    out.height = profile.height % 2 === 0 ? profile.height : profile.height + 1;
    const ctx = out.getContext("2d", { willReadFrequently: true });
    ctx.clearRect(0, 0, out.width, out.height);

    if (!bounds.hasContent) {
      return { canvas: out, bounds, hasTransparency: true };
    }

    const zoneW = Math.max(1, out.width - padding * 2);
    const zoneH = Math.max(1, out.height - padding * 2);
    const scale = Math.min(zoneW / bounds.width, zoneH / bounds.height);
    const drawW = bounds.width * scale;
    const drawH = bounds.height * scale;
    const dx = (out.width - drawW) / 2;
    const dy = (out.height - drawH) / 2;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(canvas, bounds.x, bounds.y, bounds.width, bounds.height, dx, dy, drawW, drawH);
    return { canvas: out, bounds, hasTransparency: alphaBounds(out).hasTransparency };
  }

  function canvasToBlob(canvas) {
    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), "image/png");
    });
  }

  async function processPieces() {
    if (!state.pieces.length) {
      if (state.mode === "auto" && state.source) {
        detectStickers();
      } else if (state.mode === "grid" && state.source) {
        sliceGrid();
      } else {
        alert("請先載入或切割圖片。");
        return;
      }
    }

    if (!state.pieces.length) return;
    state.isProcessing = true;
    els.processButton.disabled = true;
    setProgress(0);
    setStatus("處理貼圖中");

    const start = intValue(els.startInput, 1, 1, 99);
    const results = [];
    for (let i = 0; i < state.pieces.length; i += 1) {
      const piece = state.pieces[i];
      let cleaned = piece.preprocessed ? cloneCanvas(piece.canvas) : removeBackground(piece.canvas);
      if (state.mode === "auto" && !piece.preprocessed) cleaned = cleanEdgeArtifacts(cleaned);
      const fitted = fitToOutput(cleaned);
      const blob = await canvasToBlob(fitted.canvas);
      results.push({
        index: i,
        sourceName: piece.name,
        fileName: `${twoDigit(start + i)}.png`,
        canvas: fitted.canvas,
        blob,
        bytes: blob.size,
        width: fitted.canvas.width,
        height: fitted.canvas.height,
        hasTransparency: fitted.hasTransparency
      });
      setProgress((i + 1) / state.pieces.length);
      await nextFrame();
    }

    state.results = results;
    state.mainIndex = clamp(state.mainIndex, 0, Math.max(0, results.length - 1));
    state.tabIndex = clamp(state.tabIndex, 0, Math.max(0, results.length - 1));
    renderResults();
    renderValidation();
    els.processButton.disabled = false;
    state.isProcessing = false;
    setStatus(`已生成 ${results.length} 張 PNG`);
  }

  function nextFrame() {
    return new Promise((resolve) => requestAnimationFrame(resolve));
  }

  function renderValidation() {
    const profile = getProfile();
    const start = intValue(els.startInput, 1, 1, 99);
    const items = [];

    if (!state.pieces.length) {
      if (state.mode === "auto") {
        items.push([state.source ? "warn" : "warn", state.source ? "尚未執行自動辨識。" : "請先上傳 AI 大圖。"]);
      } else {
        items.push(["warn", "尚未產生切片。"]);
      }
    } else {
      items.push(["ok", state.mode === "auto" ? `已自動辨識 ${state.pieces.length} 張貼圖。` : `目前有 ${state.pieces.length} 張來源切片。`]);
    }

    if (!state.results.length) {
      items.push(["warn", "尚未生成輸出 PNG。"]);
    } else {
      const count = state.results.length;
      const countStatus = profile.counts.includes(count) ? "ok" : "warn";
      items.push([countStatus, `${profile.label} 張數：${count}。標準張數為 ${profile.counts.join(" / ")}。`]);

      const badSize = state.results.find((item) => item.bytes > profile.maxBytes);
      items.push([badSize ? "bad" : "ok", badSize ? `${badSize.fileName} 超過 1 MB。` : "每張圖片小於 1 MB。"]);

      const wrongDims = state.results.find((item) => item.width !== profile.width || item.height !== profile.height);
      items.push([wrongDims ? "bad" : "ok", wrongDims ? `${wrongDims.fileName} 尺寸不符合目前輸出規格。` : `輸出尺寸 ${profile.width}×${profile.height}。`]);

      const transparentCount = state.results.filter((item) => item.hasTransparency).length;
      items.push([transparentCount ? "ok" : "warn", transparentCount ? "透明背景已保留。" : "目前未偵測到透明像素。"]);

      items.push([state.results[state.mainIndex] ? "ok" : "warn", state.results[state.mainIndex] ? `Main：${state.results[state.mainIndex].fileName}` : "尚未選擇 Main。"]);
      items.push([state.results[state.tabIndex] ? "ok" : "warn", state.results[state.tabIndex] ? `Tab：${state.results[state.tabIndex].fileName}` : "尚未選擇 Tab。"]);
    }

    if (start !== 1) {
      items.push(["warn", "LINE 單包上傳通常從 01.png 開始；非 01 起始適合合併多張網格後再整理。"]);
    }

    els.validationList.innerHTML = "";
    items.forEach(([kind, text]) => {
      const li = document.createElement("li");
      li.className = kind;
      li.textContent = `${kind === "ok" ? "✓" : kind === "bad" ? "!" : "•"} ${text}`;
      els.validationList.append(li);
    });
  }

  function makeAccessoryCanvas(sourceCanvas, width, height) {
    const out = document.createElement("canvas");
    out.width = width;
    out.height = height;
    const ctx = out.getContext("2d", { willReadFrequently: true });
    ctx.clearRect(0, 0, width, height);
    drawContain(ctx, sourceCanvas, 0, 0, width, height);
    return out;
  }

  async function lineZipFiles(prefix = "") {
    if (!state.results.length) throw new Error("請先生成貼圖。");
    const mainSource = state.results[state.mainIndex] || state.results[0];
    const tabSource = state.results[state.tabIndex] || state.results[0];
    const files = [];
    const mainCanvas = makeAccessoryCanvas(mainSource.canvas, 240, 240);
    const tabCanvas = makeAccessoryCanvas(tabSource.canvas, 96, 74);
    files.push({ name: `${prefix}main.png`, blob: await canvasToBlob(mainCanvas) });
    files.push({ name: `${prefix}tab.png`, blob: await canvasToBlob(tabCanvas) });
    for (const result of state.results) {
      files.push({ name: `${prefix}${result.fileName}`, blob: result.blob });
    }
    return files;
  }

  async function downloadLineZip() {
    try {
      const files = await lineZipFiles("");
      const zip = await createZip(files);
      downloadBlob(zip, "line-sticker-upload.zip");
      setStatus("LINE ZIP 已下載");
    } catch (error) {
      alert(error.message);
    }
  }

  async function downloadProjectZip() {
    try {
      const files = await lineZipFiles("line-upload/");
      const manifest = {
        app: "LINE Sticker Forge",
        createdAt: new Date().toISOString(),
        mode: state.mode,
        profile: getProfile(),
        source: state.source ? {
          name: state.source.name,
          width: state.source.width,
          height: state.source.height
        } : null,
        grid: getGrid(),
        output: state.results.map((item) => ({
          fileName: item.fileName,
          width: item.width,
          height: item.height,
          bytes: item.bytes,
          sourceName: item.sourceName
        }))
      };
      files.push({ name: "manifest.json", blob: new Blob([JSON.stringify(manifest, null, 2)], { type: "application/json" }) });
      files.push({ name: "prompt.txt", blob: new Blob([els.promptText.value], { type: "text/plain;charset=utf-8" }) });
      files.push({ name: "metadata.txt", blob: new Blob([metadataText()], { type: "text/plain;charset=utf-8" }) });
      files.push({ name: "metadata-vision-prompt.txt", blob: new Blob([els.metadataVisionPrompt.value], { type: "text/plain;charset=utf-8" }) });
      files.push({ name: "sticker-convert-commands.ps1", blob: new Blob([els.cliText.value], { type: "text/plain;charset=utf-8" }) });
      if (state.results.length || state.pieces.length) {
        files.push({ name: "sticker-contact-sheet.png", blob: await canvasToBlob(buildContactSheetCanvas()) });
      }
      const zip = await createZip(files);
      downloadBlob(zip, "line-sticker-project.zip");
      setStatus("專案 ZIP 已下載");
    } catch (error) {
      alert(error.message);
    }
  }

  function downloadBlob(blob, name) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.append(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function updatePrompt() {
    const count = Number(els.promptCount.value);
    const cols = count === 12 ? 4 : count === 20 ? 5 : count === 24 ? 6 : 8;
    const rows = count === 40 ? 5 : count === 20 || count === 24 ? 4 : 3;
    const theme = promptThemes[els.promptTheme.value] || promptThemes.daily;
    const style = promptStyles[els.promptStyle.value] || promptStyles.q;
    const size = count === 20 ? "2560 × 1664 px" : count === 24 ? "3072 × 1664 px" : count === 12 ? "1480 × 960 px" : "2960 × 1600 px";
    els.promptText.value = [
      `請生成一張 LINE 貼圖網格圖，共 ${count} 張，版面為 ${cols} 欄 × ${rows} 列，總尺寸 ${size}。`,
      "",
      "角色設定：同一個主角，髮型、服裝、五官與配色必須一致。畫面只包含角色與短文字，不要加入場景背景。",
      `畫風：${style}。`,
      "去背規格：背景必須是純綠色 #00FF00，不要漸層、陰影或雜點；角色與文字外圍加入粗白邊。",
      "",
      `主題：${theme.label}。`,
      `文字內容：${theme.words}。`,
      `情緒方向：${theme.mood}。每格表情與動作都要不同，文字大且清楚，不要遮住角色臉部。`,
      "",
      "輸出要求：整張大圖排列整齊，每格間距一致，所有文字使用繁體中文，避免使用綠色或黑色文字。"
    ].join("\n");
  }

  function updateCli() {
    const rawUrl = els.lineUrl.value.trim() || "https://store.line.me/stickershop/product/1234/zh-Hant";
    const platform = els.exportPlatform.value;
    const lines = [
      "# 在 PowerShell 執行。第一次會建立本機 .venv 並安裝 sticker-convert。",
      `./tools/sticker-convert-bridge.ps1 -DownloadLine "${rawUrl}" -Preset line`
    ];
    if (platform !== "line") {
      const exportFlag = platform === "whatsapp" ? "--export-whatsapp" : `--export-${platform}`;
      lines.push("");
      lines.push("# 下載後若要轉成其他平台：");
      lines.push(`./tools/sticker-convert-bridge.ps1 -InputDir ".\\stickers_output" -Preset ${platform} -ExtraArgs "${exportFlag}"`);
    }
    lines.push("");
    lines.push("# 原生 CLI 版本：");
    lines.push("python -m pip install sticker-convert");
    lines.push(`sticker-convert --no-confirm --download-line "${rawUrl}" --preset line`);
    els.cliText.value = lines.join("\n");
  }

  function generateMetadataDraft() {
    const subject = normalizeMetadataSubject();
    const theme = metadataThemes[els.metadataTheme.value] || metadataThemes.daily;
    const style = els.metadataStyle.options[els.metadataStyle.selectedIndex]?.text || "Cute sticker set";
    const count = state.results.length || state.pieces.length || Number(els.promptCount.value) || 24;
    const keywords = parseKeywords(els.metadataKeywords.value);
    const subjectTitle = toTitleCase(subject);
    const title = compactTitle(`${subjectTitle} ${theme.title} Stickers`);
    const tags = uniqueList([
      ...subject.split(/\s+/).filter(Boolean),
      ...theme.tags,
      ...keywords,
      style.toLowerCase().replace(" sticker set", "")
    ]).slice(0, 12);

    const description = fitMetadataDescription(
      `${subjectTitle} stickers for ${theme.description}, including greetings, thanks, apologies, encouragement, and playful reactions.`
    );

    els.metadataTitle.value = title;
    els.metadataDescription.value = description;
    els.metadataTags.value = tags.join(", ");
    updateMetadataCounts();
    updateMetadataVisionPrompt();
    setStatus("英文上架文案已產生");
  }

  function fitMetadataDescription(value) {
    const cleaned = value.replace(/\s+/g, " ").trim();
    if (cleaned.length <= 160) return cleaned;
    const fallback = cleaned
      .replace(", including greetings, thanks, apologies, encouragement, and playful reactions.", " for greetings and daily reactions.")
      .replace("everyday chats", "daily chats");
    if (fallback.length <= 160) return fallback;
    return `${fallback.slice(0, 157).trimEnd()}...`;
  }

  function normalizeMetadataSubject() {
    const raw = els.metadataSubject.value.trim();
    if (raw) return raw;
    const theme = els.metadataTheme.value;
    if (theme === "pet") return "cute pet character";
    return "cute character";
  }

  function parseKeywords(value) {
    return value.split(",").map((item) => item.trim().toLowerCase()).filter(Boolean);
  }

  function uniqueList(items) {
    const seen = new Set();
    const out = [];
    items.forEach((item) => {
      const normalized = item.trim().toLowerCase();
      if (!normalized || seen.has(normalized)) return;
      seen.add(normalized);
      out.push(normalized);
    });
    return out;
  }

  function toTitleCase(value) {
    return value
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  function compactTitle(value) {
    const trimmed = value.replace(/\s+/g, " ").trim();
    return trimmed.length <= 40 ? trimmed : trimmed.replace(" Stickers", "");
  }

  function metadataText() {
    return [
      `Title: ${els.metadataTitle.value}`,
      "",
      `Description: ${els.metadataDescription.value}`,
      "",
      `Tags: ${els.metadataTags.value}`
    ].join("\n");
  }

  function updateMetadataCounts() {
    const titleLen = els.metadataTitle.value.length;
    const descLen = els.metadataDescription.value.length;
    els.metadataTitleCount.textContent = `${titleLen}/40`;
    els.metadataDescriptionCount.textContent = `${descLen}/160`;
    els.metadataTitleCount.classList.toggle("is-over", titleLen > 40);
    els.metadataDescriptionCount.classList.toggle("is-over", descLen > 160);
  }

  function updateMetadataVisionPrompt() {
    const count = state.results.length || state.pieces.length || Number(els.promptCount.value) || 24;
    const subjectHint = normalizeMetadataSubject();
    els.metadataVisionPrompt.value = [
      "Please analyze the attached LINE sticker contact sheet and write English marketplace metadata.",
      "",
      `Known hint: the subject is ${subjectHint}.`,
      `Sticker count: ${count}.`,
      "The stickers may include Traditional Chinese text. Infer the overall use cases from the images and text, but write the final metadata in natural English.",
      "",
      "Return exactly this format:",
      "Title: 35 characters or less, clear and searchable.",
      "Description: 1-2 concise sentences for LINE sticker buyers.",
      "Tags: 10-12 lowercase English tags separated by commas.",
      "",
      "Avoid copyrighted character names unless they are visibly part of the user's original character. Do not mention AI generation."
    ].join("\n");
  }

  function sourceCanvasesForContactSheet() {
    if (state.results.length) return state.results.map((item) => ({ canvas: item.canvas, label: item.fileName.replace(".png", "") }));
    return state.pieces.map((item, index) => ({ canvas: item.canvas, label: twoDigit(index + 1) }));
  }

  function buildContactSheetCanvas() {
    const items = sourceCanvasesForContactSheet();
    if (!items.length) throw new Error("請先完成自動辨識或生成貼圖。");
    const cols = Math.min(6, Math.ceil(Math.sqrt(items.length)));
    const rows = Math.ceil(items.length / cols);
    const cellW = 220;
    const cellH = 190;
    const headerH = 36;
    const canvas = document.createElement("canvas");
    canvas.width = cols * cellW;
    canvas.height = rows * cellH + headerH;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#111827";
    ctx.font = "700 18px Segoe UI, sans-serif";
    ctx.fillText("LINE Sticker Contact Sheet", 16, 24);
    ctx.font = "700 13px Segoe UI, sans-serif";

    items.forEach((item, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      const x = col * cellW;
      const y = headerH + row * cellH;
      drawChecker(ctx, x, y, cellW, cellH);
      drawContain(ctx, item.canvas, x + 16, y + 20, cellW - 32, cellH - 42);
      ctx.fillStyle = "rgba(17,24,39,0.82)";
      ctx.fillText(item.label, x + 12, y + cellH - 12);
    });

    return canvas;
  }

  function drawChecker(ctx, x, y, width, height) {
    const size = 12;
    for (let yy = y; yy < y + height; yy += size) {
      for (let xx = x; xx < x + width; xx += size) {
        const odd = ((xx - x) / size + (yy - y) / size) % 2;
        ctx.fillStyle = odd ? "#eef2ef" : "#ffffff";
        ctx.fillRect(xx, yy, size, size);
      }
    }
    ctx.strokeStyle = "#d9ded9";
    ctx.strokeRect(x + 0.5, y + 0.5, width - 1, height - 1);
  }

  async function downloadContactSheet() {
    try {
      const canvas = buildContactSheetCanvas();
      const blob = await canvasToBlob(canvas);
      downloadBlob(blob, "sticker-contact-sheet.png");
      updateMetadataVisionPrompt();
      setStatus("貼圖總覽圖已下載");
    } catch (error) {
      alert(error.message);
    }
  }

  function setToolPanel(name) {
    const isPrompt = name === "prompt";
    const isMetadata = name === "metadata";
    const isCli = name === "cli";
    const isSpec = name === "spec";
    els.promptTab.classList.toggle("is-active", isPrompt);
    els.metadataTab.classList.toggle("is-active", isMetadata);
    els.cliTab.classList.toggle("is-active", isCli);
    els.specTab.classList.toggle("is-active", isSpec);
    els.promptPanel.classList.toggle("hidden", !isPrompt);
    els.metadataPanel.classList.toggle("hidden", !isMetadata);
    els.cliPanel.classList.toggle("hidden", !isCli);
    els.specPanel.classList.toggle("hidden", !isSpec);
  }

  async function copyText(text, button, doneText) {
    const original = button.textContent;
    await navigator.clipboard.writeText(text);
    button.textContent = doneText;
    window.setTimeout(() => {
      button.textContent = original;
    }, 1200);
  }

  async function loadSample() {
    const cols = 6;
    const rows = 4;
    const cellW = 512;
    const cellH = 416;
    const canvas = document.createElement("canvas");
    canvas.width = cols * cellW;
    canvas.height = rows * cellH;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const words = ["早安", "收到", "OK", "謝謝", "加油", "晚安", "等等", "笑死", "抱歉", "出發", "完成", "好耶", "辛苦", "在嗎", "太棒", "不要", "可以", "先忙", "快來", "掰掰", "讚啦", "已讀", "救命", "衝"];
    const colors = ["#ffcf66", "#69b7ff", "#fc7f79", "#a6eb75", "#c7a4ff"];

    for (let i = 0; i < cols * rows; i += 1) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = col * cellW;
      const y = row * cellH;
      const jitterX = (((i * 37) % 74) - 37);
      const jitterY = (((i * 29) % 62) - 31);
      const stickerScale = 0.82 + ((i * 13) % 34) / 100;
      const cx = cellW / 2 + jitterX;
      const cy = cellH / 2 + 44 + jitterY;
      const fontSize = Math.round(56 + stickerScale * 16);
      ctx.save();
      ctx.translate(x, y);
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(stickerScale, stickerScale);
      drawSampleSticker(ctx, 0, 0, colors[i % colors.length], i);
      ctx.restore();
      ctx.font = `bold ${fontSize}px 'Microsoft JhengHei', sans-serif`;
      ctx.textAlign = "center";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 14;
      ctx.strokeText(words[i], cx, cy - 126 * stickerScale);
      ctx.fillStyle = ["#f04c3e", "#276ef1", "#7b45d9", "#f08b34"][i % 4];
      ctx.fillText(words[i], cx, cy - 126 * stickerScale);
      ctx.restore();
    }

    const img = new Image();
    img.onload = () => {
      state.source = {
        img,
        name: "sample-auto-24.png",
        width: img.naturalWidth,
        height: img.naturalHeight,
        size: 0
      };
      setMode("auto");
      els.gridPreset.value = "6x4";
      syncPreset();
      state.pieces = [];
      state.results = [];
      state.selectedPieceIds.clear();
      els.previewTitle.textContent = state.source.name;
      els.sourceMeta.textContent = `${state.source.width}×${state.source.height}`;
      drawPreview();
      renderPieces();
      renderResults();
      renderValidation();
      setStatus("示範圖已載入");
    };
    img.src = canvas.toDataURL("image/png");
  }

  function drawSampleSticker(ctx, cx, cy, color, index) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(((index % 5) - 2) * 0.06);
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.ellipse(0, 20, 118, 128, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(0, 24, 98, 108, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(-28, -12, 12, 0, Math.PI * 2);
    ctx.arc(28, -12, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#161819";
    ctx.beginPath();
    ctx.arc(-26, -10, 5, 0, Math.PI * 2);
    ctx.arc(30, -10, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#161819";
    ctx.lineWidth = 7;
    ctx.lineCap = "round";
    ctx.beginPath();
    if (index % 3 === 0) {
      ctx.arc(0, 36, 26, 0.1, Math.PI - 0.1);
    } else if (index % 3 === 1) {
      ctx.moveTo(-20, 38);
      ctx.lineTo(20, 38);
    } else {
      ctx.arc(0, 50, 20, Math.PI + 0.1, Math.PI * 2 - 0.1);
    }
    ctx.stroke();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 28;
    ctx.beginPath();
    ctx.moveTo(-92, 36);
    ctx.lineTo(-140, 74);
    ctx.moveTo(92, 36);
    ctx.lineTo(140, 74);
    ctx.stroke();
    ctx.strokeStyle = color;
    ctx.lineWidth = 18;
    ctx.beginPath();
    ctx.moveTo(-92, 36);
    ctx.lineTo(-140, 74);
    ctx.moveTo(92, 36);
    ctx.lineTo(140, 74);
    ctx.stroke();
    ctx.restore();
  }

  function bindDrag(drop, callback) {
    drop.addEventListener("dragover", (event) => {
      event.preventDefault();
      drop.classList.add("is-drag");
    });
    drop.addEventListener("dragleave", () => drop.classList.remove("is-drag"));
    drop.addEventListener("drop", (event) => {
      event.preventDefault();
      drop.classList.remove("is-drag");
      callback(event.dataTransfer.files);
    });
  }

  function bindEvents() {
    els.modeAuto.addEventListener("click", () => setMode("auto"));
    els.modeGrid.addEventListener("click", () => setMode("grid"));
    els.modeBatch.addEventListener("click", () => setMode("batch"));
    els.gridFile.addEventListener("change", (event) => handleGridUpload(event.target.files[0]));
    els.batchFiles.addEventListener("change", (event) => handleBatchUpload(event.target.files));
    bindDrag(els.autoDrop, (files) => handleGridUpload(files[0]));
    bindDrag(els.gridDrop, (files) => handleGridUpload(files[0]));
    bindDrag(els.batchDrop, (files) => handleBatchUpload(files));

    els.gridPreset.addEventListener("change", syncPreset);
    [els.colsInput, els.rowsInput].forEach((el) => {
      el.addEventListener("input", () => {
        els.gridPreset.value = "custom";
        drawPreview();
      });
    });
    [els.offsetX, els.offsetY, els.sourceScale, els.cellTrim].forEach((el) => {
      el.addEventListener("input", drawPreview);
    });
    [els.mergeGap, els.minArea, els.cropMargin, els.edgeCleanup].forEach((el) => {
      el.addEventListener("input", () => {
        updateLabels();
        drawPreview();
      });
    });
    [els.profileSelect, els.customW, els.customH, els.startInput, els.removeBg, els.trimTransparent, els.despill, els.bgPreset, els.bgColor, els.tolerance, els.feather, els.padding].forEach((el) => {
      el.addEventListener("input", () => {
        updateLabels();
        renderValidation();
      });
      el.addEventListener("change", () => {
        updateLabels();
        renderValidation();
      });
    });

    els.sliceButton.addEventListener("click", () => {
      if (state.mode === "auto") {
        detectStickers();
      } else if (state.mode === "grid") {
        sliceGrid();
      } else {
        renderPieces();
        drawPreview();
      }
    });
    els.resetButton.addEventListener("click", resetAdjustments);
    els.mergePiecesButton.addEventListener("click", mergeSelectedPieces);
    els.clearSelectionButton.addEventListener("click", clearPieceSelection);
    els.processButton.addEventListener("click", processPieces);
    els.downloadLineZip.addEventListener("click", downloadLineZip);
    els.downloadProjectZip.addEventListener("click", downloadProjectZip);
    els.sampleButton.addEventListener("click", loadSample);
    window.addEventListener("resize", drawPreview);

    els.promptTab.addEventListener("click", () => setToolPanel("prompt"));
    els.metadataTab.addEventListener("click", () => {
      updateMetadataVisionPrompt();
      setToolPanel("metadata");
    });
    els.cliTab.addEventListener("click", () => setToolPanel("cli"));
    els.specTab.addEventListener("click", () => setToolPanel("spec"));
    [els.promptCount, els.promptTheme, els.promptStyle].forEach((el) => el.addEventListener("change", updatePrompt));
    [els.metadataSubject, els.metadataTheme, els.metadataStyle, els.metadataKeywords].forEach((el) => {
      el.addEventListener("input", updateMetadataVisionPrompt);
      el.addEventListener("change", updateMetadataVisionPrompt);
    });
    [els.metadataTitle, els.metadataDescription].forEach((el) => {
      el.addEventListener("input", updateMetadataCounts);
      el.addEventListener("change", updateMetadataCounts);
    });
    [els.lineUrl, els.exportPlatform].forEach((el) => el.addEventListener("input", updateCli));
    [els.lineUrl, els.exportPlatform].forEach((el) => el.addEventListener("change", updateCli));
    els.copyPrompt.addEventListener("click", () => copyText(els.promptText.value, els.copyPrompt, "已複製"));
    els.generateMetadata.addEventListener("click", generateMetadataDraft);
    els.downloadContactSheet.addEventListener("click", downloadContactSheet);
    els.copyMetadata.addEventListener("click", () => copyText(metadataText(), els.copyMetadata, "已複製"));
    els.copyVisionPrompt.addEventListener("click", () => copyText(els.metadataVisionPrompt.value, els.copyVisionPrompt, "已複製"));
    els.copyCli.addEventListener("click", () => copyText(els.cliText.value, els.copyCli, "已複製"));
  }

  function init() {
    bindEvents();
    updateLabels();
    updatePrompt();
    updateCli();
    updateMetadataVisionPrompt();
    updateMetadataCounts();
    updatePieceActionState();
    renderValidation();
    drawPreview();
  }

  init();

  const crcTable = (() => {
    const table = new Uint32Array(256);
    for (let n = 0; n < 256; n += 1) {
      let c = n;
      for (let k = 0; k < 8; k += 1) {
        c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      }
      table[n] = c >>> 0;
    }
    return table;
  })();

  function crc32(data) {
    let crc = 0xffffffff;
    for (let i = 0; i < data.length; i += 1) {
      crc = crcTable[(crc ^ data[i]) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function dosDateTime(date) {
    const year = Math.max(1980, date.getFullYear());
    const dosTime = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
    const dosDate = ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
    return { dosTime, dosDate };
  }

  function writeU16(view, offset, value) {
    view.setUint16(offset, value, true);
  }

  function writeU32(view, offset, value) {
    view.setUint32(offset, value >>> 0, true);
  }

  async function createZip(fileEntries) {
    const encoder = new TextEncoder();
    const chunks = [];
    const central = [];
    let offset = 0;
    const now = dosDateTime(new Date());

    for (const entry of fileEntries) {
      const nameBytes = encoder.encode(entry.name.replace(/\\/g, "/"));
      const data = new Uint8Array(await entry.blob.arrayBuffer());
      const crc = crc32(data);

      const local = new Uint8Array(30 + nameBytes.length);
      const localView = new DataView(local.buffer);
      writeU32(localView, 0, 0x04034b50);
      writeU16(localView, 4, 20);
      writeU16(localView, 6, 0);
      writeU16(localView, 8, 0);
      writeU16(localView, 10, now.dosTime);
      writeU16(localView, 12, now.dosDate);
      writeU32(localView, 14, crc);
      writeU32(localView, 18, data.length);
      writeU32(localView, 22, data.length);
      writeU16(localView, 26, nameBytes.length);
      writeU16(localView, 28, 0);
      local.set(nameBytes, 30);
      chunks.push(local, data);

      const centralHeader = new Uint8Array(46 + nameBytes.length);
      const centralView = new DataView(centralHeader.buffer);
      writeU32(centralView, 0, 0x02014b50);
      writeU16(centralView, 4, 20);
      writeU16(centralView, 6, 20);
      writeU16(centralView, 8, 0);
      writeU16(centralView, 10, 0);
      writeU16(centralView, 12, now.dosTime);
      writeU16(centralView, 14, now.dosDate);
      writeU32(centralView, 16, crc);
      writeU32(centralView, 20, data.length);
      writeU32(centralView, 24, data.length);
      writeU16(centralView, 28, nameBytes.length);
      writeU16(centralView, 30, 0);
      writeU16(centralView, 32, 0);
      writeU16(centralView, 34, 0);
      writeU16(centralView, 36, 0);
      writeU32(centralView, 38, 0);
      writeU32(centralView, 42, offset);
      centralHeader.set(nameBytes, 46);
      central.push(centralHeader);

      offset += local.length + data.length;
    }

    const centralOffset = offset;
    let centralSize = 0;
    central.forEach((item) => {
      centralSize += item.length;
      chunks.push(item);
    });

    const end = new Uint8Array(22);
    const endView = new DataView(end.buffer);
    writeU32(endView, 0, 0x06054b50);
    writeU16(endView, 4, 0);
    writeU16(endView, 6, 0);
    writeU16(endView, 8, fileEntries.length);
    writeU16(endView, 10, fileEntries.length);
    writeU32(endView, 12, centralSize);
    writeU32(endView, 16, centralOffset);
    writeU16(endView, 20, 0);
    chunks.push(end);

    return new Blob(chunks, { type: "application/zip" });
  }
})();
