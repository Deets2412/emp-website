$file = 'C:\Users\61410\Claude Code\emp-social\src\app\settings\client.tsx'
$content = Get-Content $file -Raw

# Add useToast import
$content = $content -replace "import type \{ BrandConfig, ContentPillar \} from '@/types'", "import { useToast } from '@/components/shared/Toast'`nimport type { BrandConfig, ContentPillar } from '@/types'"

# Replace saved state with useToast
$content = $content -replace "const \[saving, setSaving\] = useState\(false\)\r?\n  const \[saved, setSaved\] = useState\(false\)", "const [saving, setSaving] = useState(false)`n  const { toast } = useToast()"

# Remove setSaved(false) before try
$content = $content -replace "setSaving\(true\)\r?\n    setSaved\(false\)\r?\n    try \{", "setSaving(true)`n    try {"

# Replace the success handler
$content = $content -replace "if \(res\.ok\) \{\r?\n        const updated = await res\.json\(\)\r?\n        setBrand\(updated\)\r?\n        setSaved\(true\)\r?\n        setTimeout\(\(\) => setSaved\(false\), 3000\)\r?\n      \}", "if (res.ok) {`n        const updated = await res.json()`n        setBrand(updated)`n        toast('Brand settings saved!', 'success')`n      } else {`n        toast('Failed to save settings', 'error')`n      }"

# Replace the save bar message
$content = $content -replace "\{saved \? 'Changes saved!' : 'Configure your brand identity and voice'\}", "'Configure your brand identity and voice'"

# Fix responsive grid for colors
$content = $content -replace 'grid grid-cols-3 gap-4', 'grid grid-cols-1 gap-4 sm:grid-cols-3'

$content | Set-Content $file -NoNewline
Write-Host "Settings client updated successfully"
