# Урок 3: Flexbox и карточки

## Что такое Flexbox

Flexbox — это способ выравнивать элементы в ряды и колонки.

Главные свойства:

display: flex — включить

flex-режим

justify-content — выравнивание по горизонтали

align-items — выравнивание по вертикали

gap — расстояние между элементами

flex-wrap — перенос на новую строку

## Как центрировать карточку

.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}

## Что такое карточка

Карточка — это блок с информацией: заголовок, описание, картинка, кнопка.

.card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

## Как сделать сетку карточек

.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 250px;
}
