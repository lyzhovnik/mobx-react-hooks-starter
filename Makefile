IMAGE_NAME=example-name/client

build:
	docker build --rm -t $(IMAGE_NAME):latest .
.PHONY: build


prod: network
	COMPOSE_HTTP_TIMEOUT=200 docker-compose up -d


network:
	docker network example-name-$(USER) 2> /dev/null || echo "network example-name-$(USER) already exists"
