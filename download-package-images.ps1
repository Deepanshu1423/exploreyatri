$ErrorActionPreference = "Stop"

$Target = Join-Path $PSScriptRoot "public\images\packages"
New-Item -ItemType Directory -Force $Target | Out-Null

$images = @{
  "chopta-tungnath.jpg"   = "https://images.unsplash.com/photo-1729915191102-e6bc9e53910f?auto=format&fit=crop&fm=jpg&q=82&w=1800"
  "udaipur-mount-abu.jpg" = "https://images.unsplash.com/photo-1695956353120-54ce5e91632b?auto=format&fit=crop&fm=jpg&q=82&w=1800"
  "mcleodganj-triund.jpg" = "https://images.unsplash.com/photo-1509016491329-3da6c5ba7555?auto=format&fit=crop&fm=jpg&q=82&w=1800"
  "jaisalmer-desert.jpg"  = "https://images.unsplash.com/photo-1709620220232-12ecd7ca33a8?auto=format&fit=crop&fm=jpg&q=82&w=1800"
  "manali-solang.jpg"     = "https://images.unsplash.com/photo-1497267049703-01d7eb538c99?auto=format&fit=crop&fm=jpg&q=82&w=1800"
  "jibhi-tirthan.jpg"     = "https://images.unsplash.com/photo-1715236041002-dfb1445fa77d?auto=format&fit=crop&fm=jpg&q=82&w=1800"
  "manali-kasol.jpg"      = "https://images.unsplash.com/photo-1581791534721-e599df4417f7?auto=format&fit=crop&fm=jpg&q=82&w=1800"
  "kashmir-explorer.jpg"  = "https://images.unsplash.com/photo-1569852837213-00d97a707a83?auto=format&fit=crop&fm=jpg&q=82&w=1800"
  "kedarnath-yatra.jpg"   = "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?auto=format&fit=crop&fm=jpg&q=82&w=1800"
  "do-dham-yatra.jpg"     = "https://images.unsplash.com/photo-1766765452840-5aaa9d3fad3a?auto=format&fit=crop&fm=jpg&q=82&w=1800"
  "char-dham-yatra.jpg"   = "https://images.unsplash.com/photo-1741412831445-999a1ad74bc2?auto=format&fit=crop&fm=jpg&q=82&w=1800"
}

foreach ($name in $images.Keys) {
  $destination = Join-Path $Target $name
  Write-Host "Downloading $name..."
  Invoke-WebRequest -Uri $images[$name] -OutFile $destination
}

Write-Host ""
Write-Host "Done. Package images saved to:"
Write-Host $Target
