install: # установить зависимости
	npm ci

brain-games: # запустить приложение
	node bin/brain-games.js

publish: #публикация
	npm publish --dry-run

lint: # запуск eslint
	npx eslint --fix .