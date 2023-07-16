yarn config set version-sign-git-tag false
yarn config set version-git-tag false


echo "yarn publish: $1";


cd monaco
echo "yarn publish $PWD: $1";
yarn
yarn publish --new-version $1
cd ..
