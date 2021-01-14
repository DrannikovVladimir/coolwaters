install:
	npm ci

build:
	rm -rf dist
	npx babel src --out-dir dist

lint:
	npx eslint src/js/*.js
