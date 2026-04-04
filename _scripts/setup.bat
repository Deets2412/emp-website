@echo off
set PATH=C:\Program Files\nodejs;%PATH%
echo Creating Next.js project...
call npx create-next-app@latest "C:\Users\61410\Claude Code\emp-website" --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --no-turbopack --no-experimental-app 2>&1
echo Done!
