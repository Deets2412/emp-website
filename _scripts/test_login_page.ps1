Write-Output "Testing frontend login page via tunnel..."
try {
    $response = Invoke-WebRequest -Uri 'https://ic.taylored-ai.net/login' -UseBasicParsing -TimeoutSec 15
    Write-Output "  Status: $($response.StatusCode)"
    Write-Output "  Content length: $($response.Content.Length) bytes"
    # Check if the page has the PIN input elements
    if ($response.Content -match 'inputMode.*numeric') {
        Write-Output "  PIN inputs found: YES"
    } else {
        Write-Output "  PIN inputs found: NO"
    }
    if ($response.Content -match 'IC Framework') {
        Write-Output "  IC Framework branding: YES"
    }
} catch {
    Write-Output "  Error: $($_.Exception.Message)"
}
