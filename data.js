const questionsJsvsScript = [
  {
    id: 1,
    question: "Какой метод добавляет новый элемент в конец массива?",
    options: [
      "array.push()",
      "array.pop()",
      "array.shift()",
      "array.unshift()"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Что выведет console.log(typeof NaN)?",
    options: [
      "'number'",
      "'string'",
      "'undefined'",
      "'NaN'"
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "Какой оператор проверяет равенство и по значению, и по типу?",
    options: [
      "==",
      "===",
      "=",
      "!=="
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Что такое замыкание (closure) в JavaScript?",
    options: [
      "Способ скрыть переменные от внешнего мира",
      "Функция, которая запоминает свое лексическое окружение",
      "Специальный тип объекта",
      "Синтаксис для создания классов"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Какой метод преобразует JSON-строку в JavaScript-объект?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.toObject()",
      "JSON.fromString()"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "Что делает оператор 'use strict'?",
    options: [
      "Включает строгий режим выполнения кода",
      "Объявляет переменную как константу",
      "Запрещает использование этого файла",
      "Указывает на строгую типизацию"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "Какой метод создает новый массив на основе существующего?",
    options: [
      "array.slice()",
      "array.splice()",
      "array.split()",
      "array.join()"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "Что такое hoisting в JavaScript?",
    options: [
      "Поднятие переменных и функций в начало области видимости",
      "Специальный тип анимации",
      "Метод оптимизации кода",
      "Способ объявления классов"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "Какой метод используется для обработки промисов?",
    options: [
      ".then()",
      ".catch()",
      ".finally()",
      "Все перечисленные"
    ],
    correctAnswer: 3
  },
  {
    id: 10,
    question: "Что такое IIFE?",
    options: [
      "Немедленно вызываемое функциональное выражение",
      "Специальный тип импорта",
      "Метод итерации по массиву",
      "Синтаксис стрелочных функций"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "Какой метод преобразует массив в строку?",
    options: [
      "array.toString()",
      "array.join()",
      "Оба варианта верны",
      "Такого метода нет"
    ],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "Что делает метод Object.keys()?",
    options: [
      "Возвращает массив свойств объекта",
      "Блокирует изменение объекта",
      "Создает копию объекта",
      "Преобразует объект в массив"
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "Как объявить класс в ES6?",
    options: [
      "class MyClass {}",
      "function MyClass() {}",
      "object.create(MyClass)",
      "new Class {}"
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    question: "Что такое деструктуризация?",
    options: [
      "Извлечение данных из массивов или объектов",
      "Удаление свойств объекта",
      "Разрушение структуры программы",
      "Специальный тип комментариев"
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "Какой метод выполняет функцию для каждого элемента массива?",
    options: [
      "array.forEach()",
      "array.map()",
      "array.filter()",
      "Все перечисленные"
    ],
    correctAnswer: 3
  }
];
const questionsHTML = [
  {
    id: 1,
    question: "Какой тег используется для создания гиперссылки?",
    options: [
      "&#8249;link&#8250;",
      "&#8249;a&#8250;",
      "&#8249;href&#8250;",
      "&#8249;url&#8250;"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Какой тег определяет основное содержимое документа?",
    options: [
      "&#8249;main&#8250;",
      "&#8249;body&#8250;",
      "&#8249;content&#8250;",
      "&#8249;html&#8250;"
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "Какой атрибут делает поле ввода обязательным для заполнения?",
    options: [
      "required",
      "mandatory",
      "necessary",
      "validate"
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Какой тег используется для вставки изображения?",
    options: [
      "&#8249;img&#8250;",
      "&#8249;image&#8250;",
      "&#8249;picture&#8250;",
      "&#8249;src&#8250;"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Какой тег создает нумерованный список?",
    options: [
      "&#8249;ul&#8250;",
      "&#8249;ol&#8250;",
      "&#8249;li&#8250;",
      "&#8249;list&#8250;"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Какой тег используется для таблицы?",
    options: [
      "&#8249;table&#8250;",
      "&#8249;tab&#8250;",
      "&#8249;grid&#8250;",
      "&#8249;data&#8250;"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "Какой тег определяет заголовок документа?",
    options: [
      "&#8249;head&#8250;",
      "&#8249;header&#8250;",
      "&#8249;title&#8250;",
      "&#8249;h1&#8250;"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Какой атрибут указывает альтернативный текст для изображения?",
    options: [
      "alt",
      "title",
      "description",
      "src-alt"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "Какой тег создает поле ввода для пароля?",
    options: [
      "&#8249;input type='secret'&#8250;",
      "&#8249;input type='password'&#8250;",
      "&#8249;password&#8250;",
      "&#8249;input type='hidden'&#8250;"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Какой тег используется для вставки видео?",
    options: [
      "&#8249;media&#8250;",
      "&#8249;video&#8250;",
      "&#8249;movie&#8250;",
      "&#8249;embed&#8250;"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "Какой тег создает выпадающий список?",
    options: [
      "&#8249;input type='dropdown'&#8250;",
      "&#8249;list&#8250;",
      "&#8249;select&#8250;",
      "&#8249;option list&#8250;"
    ],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "Какой тег используется для семантического раздела страницы?",
    options: [
      "&#8249;div&#8250;",
      "&#8249;span&#8250;",
      "&#8249;section&#8250;",
      "&#8249;block&#8250;"
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "Какой атрибут указывает версию HTML?",
    options: [
      "version",
      "doctype",
      "&#8249;!DOCTYPE&#8250;",
      "html-version"
    ],
    correctAnswer: 2
  },
  {
    id: 14,
    question: "Какой тег создает кнопку?",
    options: [
      "&#8249;btn&#8250;",
      "&#8249;button&#8250;",
      "&#8249;input type='button'&#8250;",
      "Варианты 2 и 3 верны"
    ],
    correctAnswer: 3
  },
  {
    id: 15,
    question: "Какой тег используется для мета-описания страницы?",
    options: [
      "&#8249;meta&#8250;",
      "&#8249;description&#8250;",
      "&#8249;info&#8250;",
      "&#8249;head meta&#8250;"
    ],
    correctAnswer: 0
  }
];
const cssQuestions = [
  {
    id: 1,
    question: "Какое свойство изменяет цвет текста?",
    options: [
      "text-color",
      "font-color",
      "color",
      "text-style"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Как сделать текст полужирным?",
    options: [
      "font-weight: bold;",
      "font: bold;",
      "text-style: bold;",
      "font-size: bold;"
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "Как подключить внешний CSS файл?",
    options: [
      "&#8249;style src='style.css'&#8250;",
      "&#8249;link rel='stylesheet' href='style.css'&#8250;",
      "&#8249;css&#8250;style.css&#8249;/css&#8250;",
      "&#8249;import css='style.css'&#8250;"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Как сделать элемент невидимым, сохраняя его место в потоке?",
    options: [
      "display: none;",
      "visibility: hidden;",
      "opacity: 0;",
      "hidden: true;"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Что делает свойство position: absolute;?",
    options: [
      "Фиксирует элемент относительно окна браузера",
      "Позиционирует элемент относительно его нормального положения",
      "Позиционирует элемент относительно ближайшего позиционированного предка",
      "Делает элемент абсолютно прозрачным"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "Как создать гибкий макет с flexbox?",
    options: [
      "display: flexbox;",
      "display: flex;",
      "display: inline-flex;",
      "layout: flex;"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Как изменить курсор при наведении?",
    options: [
      "mouse-pointer: pointer;",
      "cursor: pointer;",
      "pointer: hand;",
      "hover: cursor(pointer);"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Как сделать тень у блока?",
    options: [
      "shadow: 5px 5px 10px gray;",
      "box-shadow: 5px 5px 10px gray;",
      "block-shadow: 5px 5px 10px gray;",
      "element-shadow: 5px 5px 10px gray;"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Как сделать анимацию в CSS?",
    options: [
      "@animation",
      "@keyframes",
      "@animate",
      "@motion"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Как выбрать все элементы &#8249;p&#8250; внутри &#8249;div&#8250;?",
    options: [
      "div + p",
      "div.p",
      "div p",
      "div &#8250; p"
    ],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "Как сделать градиентный фон?",
    options: [
      "background: gradient(...);",
      "background: linear-gradient(...);",
      "background-color: gradient(...);",
      "gradient: background(...);"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Как изменить размер блока, включая padding и border в общую ширину?",
    options: [
      "box-model: border-box;",
      "box-sizing: border-box;",
      "size-mode: include-padding;",
      "width: calc(100% + padding);"
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "Как сделать адаптивный дизайн?",
    options: [
      "Использовать @media queries",
      "Использовать responsive: true;",
      "Использовать viewport units",
      "Варианты 1 и 3 верны"
    ],
    correctAnswer: 3
  },
  {
    id: 14,
    question: "Как центрировать блок по горизонтали с margin?",
    options: [
      "margin: center;",
      "margin: 0 auto;",
      "margin-auto: center;",
      "center: margin;"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "Как изменить порядок элементов в flex-контейнере?",
    options: [
      "flex-order",
      "order",
      "flex-index",
      "z-index"
    ],
    correctAnswer: 1
  }
];