./download_pages.ps1
python parser.py
Move-Item skill_data.js ../src/skill_data.js -Force
Move-Item prereq_data.js ../src/prereq_data.js -Force
Move-Item mastery_skills.js ../src/mastery_skills.js -Force
