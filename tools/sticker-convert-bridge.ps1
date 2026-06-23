param(
    [string]$DownloadLine,
    [string]$InputDir,
    [string]$Preset = "line",
    [string]$OutputDir = ".\stickers_output",
    [string]$ExtraArgs = ""
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$Venv = Join-Path $Root ".venv-sticker-convert"
$Python = Get-Command python -ErrorAction SilentlyContinue

if (-not $Python) {
    $Python = Get-Command py -ErrorAction SilentlyContinue
}

if (-not $Python) {
    throw "Python was not found. Install Python 3 before running sticker-convert."
}

if (-not (Test-Path $Venv)) {
    Write-Host "Creating sticker-convert virtual environment..."
    if ($Python.Name -eq "py.exe" -or $Python.Name -eq "py") {
        & $Python.Source -3 -m venv $Venv
    } else {
        & $Python.Source -m venv $Venv
    }
}

$Pip = Join-Path $Venv "Scripts\pip.exe"
$StickerConvert = Join-Path $Venv "Scripts\sticker-convert.exe"

if (-not (Test-Path $StickerConvert)) {
    Write-Host "Installing sticker-convert..."
    & $Pip install --upgrade pip
    & $Pip install sticker-convert
}

$argsList = @("--no-confirm")

if ($DownloadLine) {
    $argsList += @("--download-line", $DownloadLine)
}

if ($InputDir) {
    $resolvedInput = Resolve-Path -LiteralPath $InputDir
    $argsList += @("--input-dir", $resolvedInput.Path)
}

if ($OutputDir) {
    $argsList += @("--output-dir", $OutputDir)
}

if ($Preset) {
    $argsList += @("--preset", $Preset)
}

if ($ExtraArgs.Trim()) {
    $argsList += ($ExtraArgs -split "\s+")
}

Write-Host "Running: sticker-convert $($argsList -join ' ')"
& $StickerConvert @argsList
