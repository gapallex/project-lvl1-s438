install:
	npm install

start even:
	npx babel-node -- src/bin/brain-games.js

publish:
	npm publish

lint:
	npx eslint .
