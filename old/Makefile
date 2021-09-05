include .env

NAME = $(shell basename $(CURDIR))
PORT = 1414

build-local:
	hugo

run-local:
	hugo server -D

build-docker:
	DOCKER_BUILDKIT=1 \
	docker build  \
		--progress=plain \
		--tag $(NAME)_nginx \
		--build-arg GOOGLE_ANALYTICS_TAG=$(GOOGLE_ANALYTICS_TAG) \
		--build-arg HUGO_ENV_ARG="production" \
		--build-arg HUGO_DESTINATION_ARG="/target" \
		--target=nginx \
		--file=./Dockerfile .

run-docker: build-docker
	docker run --rm \
		--name $(NAME)_nginx \
		-e NGINX_ENTRYPOINT_QUIET_LOGS=1 \
		-p $(PORT):80 \
		$(NAME)_nginx
	$(info running on http://localhost:$(PORT))