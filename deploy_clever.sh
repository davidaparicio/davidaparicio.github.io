#!/usr/bin/env bash

HUGO_VERSION="0.91.2"
HUGO_DESTINATION="public"
#HUGO_DEBUG="" #--debug
#docker run --rm -it --cpus="1.5" -v "$(pwd)":/src klakegg/hugo:"${HUGO_VERSION}"-ext-alpine --cleanDestinationDir --minify ${HUGO_DEBUG}

#clever create "website_$(date "+%Y%m%dT%H%M%S")" --type static-apache
clever link app_166bc141-afa9-4536-afd2-61f661648d93
clever scale --flavor nano
#clever domain add clever-cloud.com/fr/podcast
clever config set force-https enabled
clever env set CC_PRE_BUILD_HOOK "./hugo.sh"
#clever env set CC_PRE_BUILD_HOOK "${BASH_SOURCE[0]}"
clever env set CC_WEBROOT "/${HUGO_DESTINATION}"
clever env set HUGO_ENV "production"
clever env set HUGO_VERSION "${HUGO_VERSION}"
clever env set PORT "1313"
BASE_URL="https://$(clever domain | xargs)"
clever env set BASE_URL "${BASE_URL}"
clever deploy

# https://www.clever-cloud.com/blog/engineering/2020/06/18/deploy-static-site-hugo/
# https://www.clever-cloud.com/doc/deploy/application/golang/go/
# https://hub.docker.com/r/klakegg/hugo/
# https://www.jhipster.tech/clever-cloud/