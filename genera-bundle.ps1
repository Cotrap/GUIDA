# genera-bundle.ps1
# Genera js/data.js a partire dai file JSON nella cartella content/
# Eseguire questo script ogni volta che si modifica un file JSON in content/

$contentDir = Join-Path $PSScriptRoot "content"
$jsDir = Join-Path $PSScriptRoot "js"
$outputFile = Join-Path $jsDir "data.js"
$now = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

$sb = New-Object System.Text.StringBuilder
[void]$sb.AppendLine("/**")
[void]$sb.AppendLine(" * GUIDA ITINERIS - Dati pre-caricati (generato automaticamente)")
[void]$sb.AppendLine(" * NON MODIFICARE QUESTO FILE MANUALMENTE.")
[void]$sb.AppendLine(" * Per aggiornare: modificare i JSON in content/ e rieseguire genera-bundle.ps1")
[void]$sb.AppendLine(" * Generato il: $now")
[void]$sb.AppendLine(" */")
[void]$sb.AppendLine("var BUNDLED_DATA = {")

$files = Get-ChildItem -Path $contentDir -Filter "*.json" | Sort-Object Name
$count = 0

foreach ($f in $files) {
    $name = $f.BaseName
    $json = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8).Trim()
    
    if ($count -gt 0) {
        [void]$sb.AppendLine(",")
    }
    [void]$sb.Append("  ""$name"": $json")
    $count++
}

[void]$sb.AppendLine("")
[void]$sb.AppendLine("};")

[System.IO.File]::WriteAllText($outputFile, $sb.ToString(), (New-Object System.Text.UTF8Encoding $false))

Write-Host "Bundle generato: $outputFile"
Write-Host "Contenuti inclusi: $count file JSON"
