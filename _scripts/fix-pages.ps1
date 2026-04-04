# 1. Posts client - add card-hover class
$file = 'C:\Users\61410\Claude Code\emp-social\src\app\posts\client.tsx'
$content = Get-Content $file -Raw
$content = $content -replace 'rounded-lg border border-primary-100 bg-white p-4 transition-shadow hover:shadow-md', 'card-hover rounded-lg border border-primary-100 bg-white p-4'
$content | Set-Content $file -NoNewline
Write-Host "Posts client updated"

# 2. Post detail client - add toast + responsive grid
$file = 'C:\Users\61410\Claude Code\emp-social\src\app\posts\[id]\client.tsx'
$content = Get-Content -LiteralPath $file -Raw
# Add toast import
$content = $content -replace "import { Button } from '@/components/shared/Button'", "import { Button } from '@/components/shared/Button'`nimport { useToast } from '@/components/shared/Toast'"
# Add useToast hook
$content = $content -replace "const \[publishing, setPublishing\] = useState\(false\)\r?\n  const \[publishError, setPublishError\] = useState\(''\)", "const [publishing, setPublishing] = useState(false)`n  const [publishError, setPublishError] = useState('')`n  const { toast } = useToast()"
# Fix responsive grid
$content = $content -replace 'grid grid-cols-3 gap-4', 'grid grid-cols-1 gap-4 sm:grid-cols-3'
$content | Set-Content -LiteralPath $file -NoNewline
Write-Host "Post detail client updated"

# 3. New post client - add toast + responsive grid
$file = 'C:\Users\61410\Claude Code\emp-social\src\app\posts\new\client.tsx'
$content = Get-Content $file -Raw
# Add toast import
$content = $content -replace "import { Button } from '@/components/shared/Button'", "import { Button } from '@/components/shared/Button'`nimport { useToast } from '@/components/shared/Toast'"
# Add useToast hook after saving state
$content = $content -replace "const \[saving, setSaving\] = useState\(false\)", "const [saving, setSaving] = useState(false)`n  const { toast } = useToast()"
# Fix responsive grid
$content = $content -replace 'mb-6 grid grid-cols-3 gap-4', 'mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3'
# Add card-hover on variation card selection
$content = $content -replace "className=""cursor-pointer rounded-xl border border-primary-100 bg-white p-5 transition-shadow hover:shadow-md""", "className=""cursor-pointer card-hover rounded-xl border border-primary-100 bg-white p-5"""
$content | Set-Content $file -NoNewline
Write-Host "New post client updated"

# 4. Templates client - add card-hover
$file = 'C:\Users\61410\Claude Code\emp-social\src\app\templates\client.tsx'
$content = Get-Content $file -Raw
$content = $content -replace 'rounded-xl border border-primary-100 bg-white p-5 transition-shadow hover:shadow-md', 'card-hover rounded-xl border border-primary-100 bg-white p-5'
$content | Set-Content $file -NoNewline
Write-Host "Templates client updated"

# 5. Template detail client - add toast
$file = 'C:\Users\61410\Claude Code\emp-social\src\app\templates\[id]\client.tsx'
$content = Get-Content -LiteralPath $file -Raw
$content = $content -replace "import { Button } from '@/components/shared/Button'", "import { Button } from '@/components/shared/Button'`nimport { useToast } from '@/components/shared/Toast'"
$content = $content -replace "const \[deleting, setDeleting\] = useState\(false\)", "const [deleting, setDeleting] = useState(false)`n  const { toast } = useToast()"
$content | Set-Content -LiteralPath $file -NoNewline
Write-Host "Template detail client updated"

# 6. Template new client - add toast + responsive grid
$file = 'C:\Users\61410\Claude Code\emp-social\src\app\templates\new\client.tsx'
$content = Get-Content $file -Raw
$content = $content -replace "import { Button } from '@/components/shared/Button'", "import { Button } from '@/components/shared/Button'`nimport { useToast } from '@/components/shared/Toast'"
$content = $content -replace "const \[saving, setSaving\] = useState\(false\)", "const [saving, setSaving] = useState(false)`n  const { toast } = useToast()"
$content = $content -replace 'grid grid-cols-3 gap-4', 'grid grid-cols-1 gap-4 sm:grid-cols-3'
$content | Set-Content $file -NoNewline
Write-Host "Template new client updated"

# 7. Calendar client - add toast
$file = 'C:\Users\61410\Claude Code\emp-social\src\app\calendar\client.tsx'
$content = Get-Content $file -Raw
$content = $content -replace "import { Button } from '@/components/shared/Button'", "import { Button } from '@/components/shared/Button'`nimport { useToast } from '@/components/shared/Toast'"
$content = $content -replace "const \[loading, setLoading\] = useState\(false\)", "const [loading, setLoading] = useState(false)`n  const { toast } = useToast()"
$content | Set-Content $file -NoNewline
Write-Host "Calendar client updated"
