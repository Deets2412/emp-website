$env:PATH = "C:\Program Files\nodejs;" + [System.Environment]::GetEnvironmentVariable("PATH", "Machine")
Set-Location "C:\Users\61410\Claude Code\emp-website"
npm run build
