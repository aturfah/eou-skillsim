$output_directory = '../src/data'
if (-not (Test-Path $output_directory)) {
    New-Item -ItemType 'Directory' -Path $output_directory
}

python parser.py

Move-Item skill_data.js "$output_directory/skill_data.js" -Force
Move-Item prereq_data.js "$output_directory/prereq_data.js" -Force
Move-Item mastery_skills.js "$output_directory/mastery_skills.js" -Force
