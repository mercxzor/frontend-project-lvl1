install: # установить зависимости
	npm ci

brain-games: # запустить приложение brain-games
	node bin/brain-games.js

publish: #публикация
	npm publish --dry-run

lint: # запуск eslint
	npx eslint --fix .

brain-even: # запустить приложение "Проверка на четность"
	node bin/brain-even.js

brain-calc: # запустить приложение "Калькулятор"
	node bin/brain-calc.js