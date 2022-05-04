#!/usr/bin/env bash

HUGO_VERSION="0.91.2"
HUGO_DESTINATION="public"

source .vps.env
echo "${USER}@${HOST}:~/${DIR}"
hugo && rsync -avz --delete public/ ${USER}@${HOST}:~/${DIR}

exit 0

# https://vexxhost.com/resources/tutorials/how-to-deploy-a-hugo-site-to-production-with-git-hooks-on-ubuntu-14-04/
# https://gohugo.io/hosting-and-deployment/deployment-with-rsync/
# Chroma, Before it was Pygments : https://gohugo.io/content-management/syntax-highlighting/ 