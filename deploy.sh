rm -rf dist
tsc
vite build
cd dist
touch .static
git init
git add .
git commit -m "project preview"
git remote add dokku dokku@ztyuu.com:nav.ztyuu.com
git push -f dokku master
