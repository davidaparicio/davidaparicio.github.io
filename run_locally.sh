#!/usr/bin/env bash

HUGO_DEBUG="" #--debug
#BASE_URL="localhost"
#HUGO_DESTINATION="public"

#echo "--- BUILDING ---"
#hugo --gc --minify --baseURL "${BASE_URL}" --destination "${HUGO_DESTINATION}" "${HUGO_DEBUG}"
echo ""
echo "--- RUNNING  ---"
hugo server --port 1313 "${HUGO_DEBUG}" #--i18n-warnings --disableFastRender 
