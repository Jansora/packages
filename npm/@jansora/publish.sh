yarn config set version-sign-git-tag false
yarn config set version-git-tag false


echo "yarn publish: $1";



cd global
echo "yarn publish $PWD: $1";
yarn
yarn publish --new-version $1
cd ..


cd material
echo "yarn publish $PWD: $1";
yarn
yarn upgrade --scope @jansora --latest
yarn upgrade @jansora/global@$1
yarn publish --new-version $1
cd ..


cd bytemd
echo "yarn publish $PWD: $1";
yarn
yarn upgrade @jansora/global@$1
yarn publish --new-version $1
cd ..

cd monaco
echo "yarn publish $PWD: $1";
yarn
yarn publish --new-version $1
cd ..

cd market/notebook
echo "yarn publish $PWD: $1";
yarn
yarn upgrade @jansora/material@$1 @jansora/monaco@$1 @jansora/bytemd@$1
yarn publish --new-version $1
cd ../../

cd market/codehub
echo "yarn publish $PWD: $1";
yarn
yarn upgrade @jansora/material@$1  @jansora/monaco@$1  @jansora/bytemd@$1
yarn publish --new-version $1
cd ../../

cd market/beike
echo "yarn publish $PWD: $1";
yarn
yarn upgrade @jansora/material@$1 @jansora/monaco@$1 @jansora/monaco@$1
yarn publish --new-version $1
cd ../../


cd market/play
echo "yarn publish $PWD: $1";
yarn
yarn upgrade @jansora/material@$1 @jansora/bytemd@$1 @jansora/monaco@$1
yarn publish --new-version $1
cd ../../


cd market/chatbot
echo "yarn publish $PWD: $1";
yarn
yarn upgrade @jansora/material@$1
yarn publish --new-version $1
cd ../../

cd market/knowledge
echo "yarn publish $PWD: $1";
yarn
yarn upgrade @jansora/material@$1
yarn publish --new-version $1
cd ../../