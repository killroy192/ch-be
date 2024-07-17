-include .env

.PHONY: init

all: init build

init:; npm i

build: docker compose build

up :;  docker compose up -d && docker compose logs -f

db-dev :; docker compose up -d postgres && docker compose logs -f postgres

be-dev :; cd backend && npm run start:dev

-include ${FCT_PLUGIN_PATH}/makefile-external