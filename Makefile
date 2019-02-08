install:
	npm install

even:
	npx babel-node -- src/bin/brain-even.js

gcd:
	npx babel-node -- src/bin/brain-gcd.js

calc:
	npx babel-node -- src/bin/brain-calc.js

progression:
	npx babel-node -- src/bin/brain-progression.js

prime:
	npx babel-node -- src/bin/brain-prime.js

publish:
	npm publish

lint:
	npx eslint .
