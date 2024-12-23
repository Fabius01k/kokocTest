# 📂 KokocTest

**KokocTest** — REST API приложение, разработанное на NestJS с использованием TypeORM для взаимодействия с базой данных PostgreSQL. Оно предоставляет CRUD функциональность для управления сущностями с автоматическими временными метками и поддержкой soft delete.

## ✨ Описание

Приложение реализует управление сущностями со следующими полями:
- `id`: уникальный идентификатор (инкремент или UUID v4).
- `title`: строка длиной до 255 символов (обязательное поле).
- `createdAt`: автоматически заполняемая дата создания с точностью до микросекунд (обязательное поле).
- `updatedAt`: дата последнего обновления записи (автоматическое заполнение при обновлении, необязательное поле).
- `deletedAt`: дата удаления записи (заполняется только при soft delete, необязательное поле).

Поддерживается:
- Регистронезависимый поиск по полю `title`.
- Пагинация.
- Вычисляемое поле `difference`, показывающее разницу в днях между `createdAt` и `updatedAt`.
- Запрос только неудалённых записей, отсортированных по убыванию поля `createdAt`.

Приложение также включает seed-функциональность для заполнения базы данных 100-1000 случайными записями.

## 🚀 Установка

### Требования:
- **Node.js**: версия `>= 16.x`
- **npm**: версия `>= 7.x`
- **PostgreSQL**: установленная и настроенная база данных.

### Шаги установки:
1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/тут должна быть ссылочка/kokoctest.git

2. Установите зависимости:
   npm install

## 🔧 Скрипты
Запуск в режиме разработки:
npm dev

Компиляция TypeScript:
npm watch

## 🧑‍💻 Использование
Приложение предоставляет REST API с поддержкой основных операций:

Создание записи
POST /kokoc

Body: { "title": "Example Title" }

Получение записей c поддержкой поиска и пагинации

GET /kokoc?search=example&page=1&limit=10

Обновление записи
PUT /kokoc/:id 

Body: { "title": "Updated Title" }


Удалене записи
DELETE /kokoc/:id

Получение вычисляемого поля difference Поле автоматически включается в вывод записей
{
"id": 1,
"title": "Example Title",
"createdAt": "2024-12-18T10:00:00.000Z",
"updatedAt": "2024-12-20T10:00:00.000Z",
"difference": 2
}

## 🛠 Технологии
- TypeScript
- NestJS
- PostgreSQL
- TypeORM
- Nodemon (для разработки)

## 📜 Лицензия
Лицензия MIT.
