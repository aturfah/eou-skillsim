$classes = "Alchemist", "Dark_Hunter", "Gunner", "Hexer", "Highlander", "Landsknecht", "Medic", "Protector", "Ronin", "Survivalist", "Troubadour"
$output_directory = "source_files"

if (-not (Test-Path $output_directory)) {
    New-Item -ItemType 'Directory' -Path $output_directory
}

foreach ($class in $classes) {
    Write-Output "Class: $class"
    $output_file = "$output_directory/$class.html"
    $class_url = "https://etrianodysseywiki.org/wiki/$class/Skills/Etrian_Odyssey_Untold"
    if (Test-Path $output_file) {
        Write-Output "  Already exists, skipping..."
    }
    else {
        Write-Output "  URL: $class_url"
        $ProgressPreference = "silentlyContinue"
        Invoke-Webrequest -Uri $class_url -outfile $output_file
    }
    Write-Output ""
}