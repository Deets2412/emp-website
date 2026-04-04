try {
    $body = '{"pin":"123456"}'
    $response = Invoke-WebRequest -Uri 'http://localhost:8000/api/v1/auth/login' -Method POST -Body $body -ContentType 'application/json' -UseBasicParsing -TimeoutSec 10
    Write-Host "STATUS: $($response.StatusCode)"
    Write-Host "BODY: $($response.Content)"
} catch {
    Write-Host "ERROR STATUS: $($_.Exception.Response.StatusCode)"
    $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
    $reader.BaseStream.Position = 0
    $reader.DiscardBufferedData()
    $body = $reader.ReadToEnd()
    Write-Host "ERROR BODY: $body"
}
