install:
	npm ci

start:
	npm start

build:
	rm -rf dist
	npx babel src --out-dir dist

lint:
	npx eslint src/js/*.js
