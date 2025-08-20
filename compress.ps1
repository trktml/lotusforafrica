[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false)
$PSDefaultParameterValues['Out-File:Encoding'] = 'utf8'
# compress.ps1

# ---------------------------------------------
# Türkçe karakterlerin doğru görüntülenmesi için:
# ---------------------------------------------

Write-Host "============================================="
Write-Host " compress.ps1"
Write-Host "============================================="

# 1) Eski klasörleri temizleyelim
if (Test-Path "thumbnails") { Remove-Item "thumbnails" -Recurse -Force }
if (Test-Path "normal")     { Remove-Item "normal" -Recurse -Force }
if (Test-Path "slider")     { Remove-Item "slider" -Recurse -Force }
if (Test-Path "resized")    { Remove-Item "resized" -Recurse -Force }
if (Test-Path "resized-compressed") { Remove-Item "resized-compressed" -Recurse -Force }

# 2) Yeni klasörleri oluşturalım
New-Item -ItemType Directory -Path "thumbnails"         | Out-Null
New-Item -ItemType Directory -Path "normal"             | Out-Null
New-Item -ItemType Directory -Path "slider"             | Out-Null
New-Item -ItemType Directory -Path "resized"            | Out-Null
New-Item -ItemType Directory -Path "resized-compressed" | Out-Null

# =============================================
# THUMBNAILS OLUŞTURMA
# =============================================
Write-Host "[Thumbnails] Sharp ile 426 px genişlikte resize ediliyor..."
sharp --input "./*.jpg" --output "resized" resize 426

Write-Host "[Thumbnails] Squoosh-cli ile compress ediliyor..."
squoosh-cli .\resized -d .\resized-compressed --webp "{effort:6,quality:50}"

Write-Host "[Thumbnails] Sonuçlar thumbnails klasörüne kopyalanıyor..."
Copy-Item ".\resized-compressed\*.*" ".\src\assets\img\wells\thumbnails\" -Force

# 3) Geçici klasörleri tekrar temizleyip oluştur
Remove-Item "resized" -Recurse -Force
Remove-Item "resized-compressed" -Recurse -Force
New-Item -ItemType Directory -Path "resized"            | Out-Null
New-Item -ItemType Directory -Path "resized-compressed" | Out-Null

# =============================================
# NORMAL OLUŞTURMA
# =============================================
Write-Host "[Normal] Sharp ile 1280 px genişlikte resize ediliyor..."
sharp --input "./*.jpg" --output "resized" resize 1280

Write-Host "[Normal] Squoosh-cli ile compress ediliyor..."
squoosh-cli .\resized -d .\resized-compressed --webp "{effort:6,quality:50}"

Write-Host "[Normal] Sonuçlar normal klasörüne kopyalanıyor..."
Copy-Item ".\resized-compressed\*.*" ".\src\assets\img\wells\full\" -Force

# 4) Geçici klasörleri tekrar temizleyip oluştur
Remove-Item "resized" -Recurse -Force
Remove-Item "resized-compressed" -Recurse -Force
New-Item -ItemType Directory -Path "resized"            | Out-Null
New-Item -ItemType Directory -Path "resized-compressed" | Out-Null

# =============================================
# SLIDER OLUŞTURMA (1920x1080, boşluklar siyah)
# =============================================
Write-Host "[Slider] 1920x1080 boyutlandırma başlıyor..."
sharp --input "./normal/*.*" --output "resized" resize 1920 1080 --fit contain --background black

Write-Host "[Slider] Squoosh-cli ile compress ediliyor..."
squoosh-cli .\resized -d .\resized-compressed --webp "{effort:6,quality:50}"

Write-Host "[Slider] Sonuçlar slider klasörüne kopyalanıyor..."
Copy-Item ".\resized-compressed\*.*" ".\src\assets\img\slider\" -Force

# 5) Geçici klasörleri son kez temizle
Remove-Item "resized" -Recurse -Force
Remove-Item "resized-compressed" -Recurse -Force
Remove-Item "./*.jpg" -Recurse -Force

Write-Host "[Tamamlandı] Thumbnails, normal ve slider klasörleri oluşturuldu!"
Read-Host "Devam etmek için Enter'a basın..."
