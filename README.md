# Иструкция по запуску

1. Клонируем репозиторий.
2. Устанавливаем пакет зависимостей командой `npm install`. Дожидаемся установки пакетов.
    1. Для запуска проекта рекуомендуется поствить версию node.js 20.2.0, так как разработка велась на этой версии.
3. Запускаем проект командой `npm run start`. Проект должен зпуститься на 3000 порту по
   адресу [http://localhost:3000](http://localhost:3000), однако если данный порт занят, будет предложено занять другой
   свободный порт. В таком случае в терминале будет написано по какому адресу запустилась программа.

## Другой доступ к приложению

Приложение было развыёрнуто на Github Pages по
адресу [https://kpeesti.github.io/aprikod-todo/](https://kpeesti.github.io/aprikod-todo/).

### Примечание

После развёртывания на Github Pages при запуске проекта локально перестали отоброжаться все иконки, поэтому часть
функционала (разворачивание задач, редактирование и удаление задачи) перестали быть доступными, для полноценного ознакомлдения
с проектом рекомендую использовать развёрнутый проект.


### Примечание 2

Для хранение данных был использован local storage. Все изменения будут сохраняться и восстанавливаться при перезагрузке страницы

Был реализован глубокий поиск задач. Если подзадача удовлетворяет условию поиска, то отображается всё дерево задач, включая родительские задачи этой подзадачи.
