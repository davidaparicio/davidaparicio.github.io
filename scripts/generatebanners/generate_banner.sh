#!/usr/bin/env bash
set -euo pipefail

#source .env

curl -H "Accept: application/json" \
    -H "Authorization: Bearer ${BEARER_TOKEN}" \
    "https://api.generatebanners.com/api/v1/${PUBLIC_API_KEY}/template/dev-blog-highlight"

#backgroundImage_background_image:
BG="https://images.unsplash.com/photo-1536920793240-c0e39e930ed3?ixlib=rb-1.2.1&dl=william-bout-iWTbc3H_lM4-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
#title_text
TI="La sécurité dès la conception du projet"
#subtitle_text
SU="David Aparicio @ Volcamp.io 2022"
#logo_background_image
LO="https://avatars2.githubusercontent.com/u/809982?v=4"

#v1
#https://api.generatebanners.com/api/v1/${PUBLIC_API_KEY}/template/blog-split-2/render?backgroundImage_background_image=${BG}&title_text=${TI}&subtitle_text=${SU}&logo_background_image=${LO}&_=1658408025905&hmac=3d8b65232f58cb76cfbd1d08aa7b927a604dbcbccc7e9fd1f224a16822ace18b
#v2 
#https://api.generatebanners.com/api/v1/${PUBLIC_API_KEY}/template/blog-split-2/render?backgroundImage_background_image=${BG}&title_text=${TI}&subtitle_text=${SU}&logo_background_image=${LO}&_=1658412434305&hmac=092795ffa8c80ccacb0bc09e06d1ebeee6f953c53aea6656d9e46e1d1c3cccc3

# https://www.generatebanners.com/documentation/api
# https://www.generatebanners.com/app/template/blog-split-2