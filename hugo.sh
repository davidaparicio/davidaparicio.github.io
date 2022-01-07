#!/usr/bin/env bash

#HUGO_VERSION="0.91.2"
#HUGO_DESTINATION="public"
#HUGO_DEBUG="" #--debug
#BASE_URL="$(clever domain)"

wget https://github.com/gohugoio/hugo/releases/download/v$HUGO_VERSION/hugo_extended_"$HUGO_VERSION"_Linux-64bit.tar.gz
tar xvf hugo_extended_"$HUGO_VERSION"_Linux-64bit.tar.gz
chmod +x ./hugo
./hugo --gc --minify --baseURL "${BASE_URL}" --destination "${HUGO_DESTINATION}" "${HUGO_DEBUG}"