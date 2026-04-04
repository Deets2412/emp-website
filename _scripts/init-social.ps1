$env:PATH = "C:\Program Files\nodejs;" + $env:PATH

$projectDir = "C:\Users\61410\Claude Code\emp-social"

# Remove if exists (fresh start)
if (Test-Path $projectDir) {
    Remove-Item -Recurse -Force $projectDir
}

# Create with all defaults (--yes skips all prompts)
npx create-next-app@latest $projectDir --typescript --tailwind --eslint --app --src-dir --use-npm --yes 2>&1

Write-Host "`nDone. Listing project:"
Get-ChildItem $projectDir -Name
