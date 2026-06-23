param(
    [int]$Port = 4173,
    [switch]$NoBrowser
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path

function Test-PortAvailable {
    param([int]$PortNumber)
    $listener = $null
    try {
        $listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Parse("127.0.0.1"), $PortNumber)
        $listener.Start()
        return $true
    } catch {
        return $false
    } finally {
        if ($listener) { $listener.Stop() }
    }
}

while (-not (Test-PortAvailable -PortNumber $Port)) {
    $Port += 1
}

$python = Get-Command python -ErrorAction SilentlyContinue
if (-not $python) {
    $python = Get-Command py -ErrorAction SilentlyContinue
}

if (-not $python) {
    throw "Python was not found. Install Python or open index.html directly in a browser."
}

$url = "http://127.0.0.1:$Port/"
Write-Host "LINE Sticker Forge is running at $url"
Write-Host "Press Ctrl+C to stop."

if (-not $NoBrowser) {
    Start-Process $url
}

Push-Location $Root
try {
    if ($python.Name -eq "py.exe" -or $python.Name -eq "py") {
        & $python.Source -3 -m http.server $Port --bind 127.0.0.1
    } else {
        & $python.Source -m http.server $Port --bind 127.0.0.1
    }
} finally {
    Pop-Location
}
