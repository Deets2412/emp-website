$env:PATH = "C:\Program Files\nodejs;" + $env:PATH
Set-Location "C:\Users\61410\Claude Code\emp-social"

# Database: Drizzle ORM + better-sqlite3
npm install drizzle-orm better-sqlite3 2>&1

# Dev dependencies: Drizzle Kit + types
npm install -D drizzle-kit @types/better-sqlite3 2>&1

# Auth: jose for JWT
npm install jose 2>&1

# Validation: zod
npm install zod 2>&1

Write-Host "`nAll dependencies installed."
