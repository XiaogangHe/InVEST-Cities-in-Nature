#!/usr/bin/env sh

# Make sure the script throws any errors it encounters
set -e

# Generate static files
yarn build

# Enter the generated folder
cd build

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:XiaogangHe/InVEST-Cities-in-Nature.git master:gh-pages
