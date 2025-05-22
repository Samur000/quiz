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
    question: "Какой атрибут указывает на обязательное поле формы?",
    options: [
      "mandatory",
      "required",
      "validate",
      "necessary"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Какой тег определяет заголовок документа?",
    options: [
      "&#8249;h1&#8250;",
      "&#8249;header&#8250;",
      "&#8249;title&#8250;",
      "&#8249;head&#8250;"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Какой тег создает маркированный список?",
    options: [
      "&#8249;ol&#8250;",
      "&#8249;dl&#8250;",
      "&#8249;ul&#8250;",
      "&#8249;list&#8250;"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Какой тег используется для вставки изображения?",
    options: [
      "&#8249;img&#8250;",
      "&#8249;picture&#8250;",
      "&#8249;src&#8250;",
      "&#8249;image&#8250;"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "Какой тег определяет подвал страницы?",
    options: [
      "&#8249;bottom&#8250;",
      "&#8249;footer&#8250;",
      "&#8249;end&#8250;",
      "&#8249;section&#8250;"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Какой тег используется для ввода пароля?",
    options: [
      "&#8249;input type='secret'&#8250;",
      "&#8249;password&#8250;",
      "&#8249;input type='password'&#8250;",
      "&#8249;secret&#8250;"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Какой тег создает таблицу?",
    options: [
      "&#8249;grid&#8250;",
      "&#8249;table&#8250;",
      "&#8249;data&#8250;",
      "&#8249;tab&#8250;"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Какой тег используется для семантического выделения навигации?",
    options: [
      "&#8249;nav&#8250;",
      "&#8249;menu&#8250;",
      "&#8249;links&#8250;",
      "&#8249;navigation&#8250;"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "Какой тег вставляет горизонтальную линию?",
    options: [
      "&#8249;line&#8250;",
      "&#8249;hr&#8250;",
      "&#8249;divider&#8250;",
      "&#8249;hl&#8250;"
    ],
    correctAnswer: 1
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
    question: "Как сделать элемент невидимым, но сохраняющим место?",
    options: [
      "display: none;",
      "visibility: hidden;",
      "opacity: 0;",
      "hidden: true;"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Какое свойство добавляет тень к блоку?",
    options: [
      "shadow",
      "box-shadow",
      "block-shadow",
      "element-shadow"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Как центрировать элемент по горизонтали с помощью margin?",
    options: [
      "margin: center;",
      "margin: 0 auto;",
      "margin: auto 0;",
      "margin-x: auto;"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Как сделать текст жирным?",
    options: [
      "font-weight: bold;",
      "text-style: bold;",
      "bold: true;",
      "font: bold;"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "Какое свойство изменяет фон элемента?",
    options: [
      "background-color",
      "bgcolor",
      "color-background",
      "element-background"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "Как создать гибкий макет (flexbox)?",
    options: [
      "display: flex;",
      "layout: flex;",
      "flex: true;",
      "display: flexbox;"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "Как скруглить углы элемента?",
    options: [
      "border-curve: 5px;",
      "corner-radius: 5px;",
      "border-radius: 5px;",
      "round-corners: 5px;"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "Как сделать анимацию в CSS?",
    options: [
      "animation: ...",
      "move: ...",
      "transition: ...",
      "animate: ..."
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "Как применить стили только при наведении?",
    options: [
      ":onhover",
      ":mouseover",
      ":hover",
      ":active"
    ],
    correctAnswer: 2
  }
];

const questionsJsvsScript = [
  {
    id: 1,
    question: "Как объявить переменную с блочной областью видимости?",
    options: [
      "var",
      "let",
      "const",
      "variable"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Как проверить тип переменной?",
    options: [
      "typeof",
      "typeOf",
      "getType",
      "whatis"
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "Как добавить элемент в конец массива?",
    options: [
      "arr.insertEnd()",
      "arr.add()",
      "arr.push()",
      "arr.append()"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Как создать новый объект?",
    options: [
      "new Object()",
      "{}",
      "Object.create()",
      "Все варианты верны"
    ],
    correctAnswer: 3
  },
  {
    id: 5,
    question: "Как выполнить функцию через 2 секунды?",
    options: [
      "setTimeout(func, 2000)",
      "delay(func, 2000)",
      "wait(func, 2000)",
      "pause(2000, func)"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "Как проверить, является ли переменная массивом?",
    options: [
      "Array.isArray(var)",
      "var.isArray()",
      "typeof var === 'array'",
      "var instanceof Array"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "Как объединить два массива?",
    options: [
      "arr1.concat(arr2)",
      "arr1 + arr2",
      "arr1.join(arr2)",
      "arr1.merge(arr2)"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "Как отменить действие по умолчанию в событии?",
    options: [
      "event.stop()",
      "event.preventDefault()",
      "event.cancel()",
      "event.halt()"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Как создать промис?",
    options: [
      "new Promise()",
      "Promise.create()",
      "promise()",
      "new Async()"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "Как получить текущую дату?",
    options: [
      "Date.now()",
      "new Date()",
      "time.now()",
      "getCurrentDate()"
    ],
    correctAnswer: 1
  }
];

const quotes = [
  {
    text: "Я не бегаю за деньгами. Я иду к ним размеренным шагом, а они сами меня догоняют.",
    author: "Джейсон Стэтхэм"
  },
  {
    text: "Если ты не уверен — притворись уверенным. Остальные сами начнут сомневаться.",
    author: "Джейсон Стэтхэм"
  },
  {
    text: "Лучший способ избежать драки — выглядеть так, будто ты её уже выиграл.",
    author: "Джейсон Стэтхэм"
  },
  {
    text: "Я не ношу часы. Время подстраивается под меня.",
    author: "Джейсон Стэтхэм"
  },
  {
    text: "Если кто-то говорит, что я переигрываю — значит, он просто не видел моих тренировок.",
    author: "Джейсон Стэтхэм"
  },
  {
    text: "Я не занимаюсь йогой. Йога занимается мной.",
    author: "Джейсон Стэтхэм"
  },
  {
    text: "Мой стиль вождения? Представь, что все вокруг — каскадёры, и им за это платят.",
    author: "Джейсон Стэтхэм"
  },
  {
    text: "Лучшая диета — это когда ты ешь всё, что хочешь, но так быстро, что калории не успевают усвоиться.",
    author: "Джейсон Стэтхэм"
  },
  {
    text: "Я не хожу в спортзал. Спортзал приходит ко мне.",
    author: "Джейсон Стэтхэм"
  },
  {
    text: "Если ты опоздал — скажи, что специально дал другим фору. Выглядит героически.",
    author: "Джейсон Стэтхэм"
  },
  {
    text: "Я не смотрю фильмы ужасов. Я в них снимаюсь для разминки.",
    author: "Джейсон Стэтхэм"
  },
  {
    text: "Мой секрет продуктивности? Делать вид, что у меня всего пять минут. Даже если это не так.",
    author: "Джейсон Стэтхэм"
  },
  {
    text: "Если тебя не заметили — значит, ты недостаточно бритый.",
    author: "Джейсон Стэтхэм"
  },
  {
    text: "Я не ношу оружие. Мои кулаки зарегистрированы как холодное и огнестрельное одновременно.",
    author: "Джейсон Стэтхэм"
  },
  {
    text: "Лучший способ мотивировать команду — выглядеть так, будто ты и один всё сделаешь.",
    author: "Джейсон Стэтхэм"
  },
  {
    text: "Я не ем фастфуд. Фастфуд ест меня… и потом жалеет об этом.",
    author: "Джейсон Стэтхэм"
  },
  {
    text: "Если на переговорах стало тихо — не торопись заполнять паузу. Пусть другие нервничают.",
    author: "Джейсон Стэтхэм"
  },
  {
    text: "Я не бегаю по утрам. Утро бегает за мной.",
    author: "Джейсон Стэтхэм"
  },
  {
    text: "Если ты упал — вставай так, будто это был трюк. Зрители всё равно не поймут разницы.",
    author: "Джейсон Стэтхэм"
  },
  {
    text: "Настоящая роскошь — это когда ты можешь носить треники на красной дорожке, и это выглядит дороже смокинга.",
    author: "Джейсон Стэтхэм"
  }
]
