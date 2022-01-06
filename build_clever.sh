#!/usr/bin/env bash

HUGO_VERSION="0.91.2"
HUGO_DESTINATION="public"
HUGO_DEBUG="" #--debug

docker run --rm -it --cpus="1.5" -v "$(pwd)":/src klakegg/hugo:"${HUGO_VERSION}"-ext-alpine --cleanDestinationDir --minify ${HUGO_DEBUG}

# https://www.clever-cloud.com/blog/engineering/2020/06/18/deploy-static-site-hugo/
# https://www.clever-cloud.com/doc/deploy/application/golang/go/
# https://hub.docker.com/r/klakegg/hugo/