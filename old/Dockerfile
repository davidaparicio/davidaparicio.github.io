# https://oo.or.id/content/what-i-have-learned-building-static-site-100k-pages/
# https://www.evzpav.com/post/deploy-hugo-blog-to-dokku/
# ---- Hugo ----
FROM klakegg/hugo:0.81.0 as hugo
COPY . /src
# build argument
ARG GOOGLE_ANALYTICS_TAG
# then set to hugo format
ENV HUGO_GoogleAnalytics=${GOOGLE_ANALYTICS_TAG}
RUN hugo

# ---- Nginx ----
FROM nginx:1.19.8 as nginx
COPY --from=hugo /src/public/ /usr/share/nginx/html