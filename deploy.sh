echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Building files to server..."
scp -r build/* pulkit@20.106.222.134:/var/www/20.106.222.134/

echo "Done!"