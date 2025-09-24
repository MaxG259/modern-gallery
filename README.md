# Modern Gallery Japan-Thailand Return 2024

Интерактивная галерея фотографий с эффектами Liquid Glass. Пет-проект для демонстрации навыков фронтенд-разработки.

## 🚀 Демо

[Посмотреть live demo](https://your-demo-link.com) *(ссылка будет добавлена после деплоя)*

## ✨ Особенности

- **Liquid Glass Design** - Современный дизайн в стиле iOS 26
- **Полная адаптивность** - Работает на всех устройствах
- **Интерактивная галерея** - Hover эффекты и модальные окна
- **Система авторизации** - Защищенные маршруты
- **Плавные анимации** - Переходы между страницами

## 🛠 Технологический стек

### Frontend
- **React 19.1.1** + **TypeScript 5.8.3**
- **Vite 7.1.2** - сборщик
- **React Router DOM 7.8.2** - маршрутизация

### Стилизация
- **Tailwind CSS 4.1.12** - utility-first CSS
- **PostCSS 8.5.6** + **Autoprefixer 10.4.21**
- **Custom CSS** - Liquid Glass эффекты, SVG фильтры
- **Custom Fonts** - BIOSFont, 404Digits

### Инструменты
- **ESLint 9.33.0** + **TypeScript ESLint 8.39.1**
- **SWC** - быстрый компилятор

## 📁 Структура

```
src/
├── app/                    # Главное приложение
├── components/            # React компоненты
│   ├── animations/        # Анимации переходов
│   ├── gallery/          # Компоненты галереи
│   ├── Login.tsx         # Страница входа
│   ├── Gallery.tsx       # Главная галерея
│   ├── NotFound.tsx      # 404 страница
│   └── Loading.tsx       # Загрузочный экран
├── contexts/             # React Context
├── photo/                # Компоненты фотографий
├── types/                # TypeScript типы
└── main.tsx              # Точка входа
```

## 🚀 Команды

```bash
# Установка
npm install

# Разработка
npm run dev

# Сборка
npm run build

# Линтинг
npm run lint
```

## 📱 Адаптивность

- **Desktop** (1920px+)
- **Laptop** (1024px - 1919px) 
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## ⚡ Производительность

- **Bundle size**: 254.38 kB (gzipped: 78.09 kB)
- **Lazy Loading** изображений
- **GPU-ускоренные** анимации
- **CSS Containment** для изоляции стилей

## 🎨 Дизайн

### Liquid Glass эффекты
- Полупрозрачные элементы с `backdrop-filter: blur()`
- SVG фильтры для искажений
- Многослойная структура для глубины

### Анимации
- CSS Transitions с `cubic-bezier`
- Transform для GPU-ускорения
- Hover эффекты с масштабированием

## 📦 Деплой

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Загрузите папку dist
```

### GitHub Pages
Автоматический деплой через GitHub Actions (файл `.github/workflows/deploy.yml`)

---

**Автор**: MAXG259 - Frontend Developer