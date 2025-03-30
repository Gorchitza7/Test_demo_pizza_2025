# 🎭 Playwright Starter Project

Этот репозиторий содержит базовую структуру для написания автотестов с использованием [Playwright](https://playwright.dev/). Включает Page Object Model (POM), переменные окружения, конфигурацию и основные команды для запуска тестов.

---

## ✨ Возможности

- Быстрый запуск автотестов в Chrome, Firefox и WebKit
- Поддержка Page Object Model (POM)
- Переменные окружения через `.env`
- HTML-отчёты о тестировании
- TypeScript + автодополнение в VS Code

---

## 🚀 Установка и инициализация

```bash
# Создать базовый проект Playwright
npm init playwright@latest
```

Следуй инструкциям в терминале:
- Выбери папку для тестов: `tests`
- Установить браузеры: `Yes`
- Добавить GitHub Actions: по желанию

---

## 🧰 Структура проекта с Page Object Model (POM)

```
playwright-pizza-demo/
│
├── core/
│   └── components/
│       ├── button.ts      ← кнопка
│       └── input.ts       ← поле ввода
│
├── pages/
│   └── authPage.ts        ← логика страницы логина
│
├── tests/
│   └── authPizza.spec.ts  ← сам тест
│
├── playwright.config.ts
├── package.json
├── tsconfig.json          ← настройка TypeScript (создадим вручную)
└── .env                   ← переменные окружения (по желанию)

```

---

## 📂 Пример `.env`

```env
BASE_URL=http://localhost:4200
```

---

## 🧪 Основные команды Playwright

```bash
# ✨ Запуск всех тестов
npx playwright test

# 🚀 Запуск в конкретном браузере
npx playwright test --project=chromium

# 🕵️‍♂️ Запустить в Chrome с открытым окном (не headless)
npx playwright test --project=chromium --headed

# 🔍 Запуск одного тест-файла
npx playwright test tests/login.spec.ts --project=chromium

# 🔍 Запуск одного теста по имени
npx playwright test -g "проверка логина" --project=chromium

# 🔄 Повторный запуск проваленных тестов
npx playwright test --repeat-each=3 --retries=2
```

---

## 📊 Отчёты

```bash
# 📃 HTML-отчёт после прогона
npx playwright show-report
```

---

## 💡 Полезные флаги

| Флаг                   | Описание                              |
|------------------------|----------------------------------------|
| `--headed`             | Запуск с открытым браузером            |
| `--project=chromium`   | Только Chrome (Chromium)               |
| `-g "name"`            | Запустить тест по имени                |
| `--debug`              | Запуск в режиме отладки                |
| `--reporter=html`      | Включить HTML-отчёт                    |
| `--trace on`           | Включить трейсинг для отладки         |
| `--ui`                 | Запустить интерактивный UI-режим тестов|

---

## 📚 Рекомендуемые плагины для VS Code

- [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)

---

## 🛠️ Дальнейшие улучшения (по желанию)

- Подключение Faker.js для генерации случайных данных
- Настройка CI через GitHub Actions
- Создание кастомных фикстур через `test.extend()`
- Мок API запросов через `page.route()`
- Централизованное управление страницами через `PageManager`
- Использование `@playwright/test` с `expect.poll` для нестабильных ожиданий
