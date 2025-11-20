#!/usr/bin/env bash

HUGO_DEBUG="" #--debug
BASE_URL=""
#HUGO_DESTINATION="public"

#echo "--- BUILDING ---"
#hugo --gc --minify --baseURL "${BASE_URL}" --destination "${HUGO_DESTINATION}" "${HUGO_DEBUG}"
echo ""
echo "--- RUNNING  ---"
/Users/daparicio/Library/Caches/hvm/v0.121.2/hugo server --port 1313 "${HUGO_DEBUG}" --baseURL "${BASE_URL}" #--i18n-warnings --disableFastRender 
#hugo server --port 1313 "${HUGO_DEBUG}" --baseURL "${BASE_URL}" #--i18n-warnings --disableFastRender 
