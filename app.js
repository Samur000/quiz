const quizContainer = document.querySelector('.quiz-container')
const themes = document.querySelector('.themes')
const quoteContainer = document.querySelector('.quote-container')
const randomIndex = Math.floor(Math.random() * quotes.length);
console.log(randomIndex);

quoteContainer.innerHTML = `
    <div class="quote"> ${quotes[randomIndex].text} </div>
    <div class="quote-autor"> ${quotes[randomIndex].author} </div>
`

let isActiveAnswer = 0
let points = 0
let theme = ''

quizContainer.addEventListener('click', (e) => {
    if (e.target.dataset.correct) {
        if (e.target.dataset.correct === 'true') {
            e.target.classList.add('correct')
            points++
        } else {
            e.target.classList.add('incorrect')
            document.querySelector('.true').classList.add('correct')
        }

        document.querySelectorAll('.option').forEach(el => el.dataset.correct = '')
        document.querySelector('.next-btn').style.display = 'block'
    }
    if (e.target.dataset.next) {
        ++isActiveAnswer
        if (theme === 'html') {
            render(questionsHTML)
        } else if (theme === 'css') {
            render(cssQuestions)
        } else if (theme === 'js') {
            render(questionsJsvsScript)
        }
    }
})

function render(array) {
    quizContainer.style.display = 'block'
    quoteContainer.style.display = 'none'
    themes.style.display = 'none'
    quizContainer.innerHTML = getTemplate(array[isActiveAnswer], array)
}

themes.addEventListener('click', (e) => {
    if (e.target.dataset.theme === 'html') {
        theme = 'html'
        render(questionsHTML)
    } else if (e.target.dataset.theme === 'css') {
        theme = 'css'
        render(cssQuestions)
    } else if (e.target.dataset.theme === 'js') {
        theme = 'js'
        render(questionsJsvsScript)
    }
})

function getTemplate(obj, arr) {
    if (isActiveAnswer + 1 > arr.length) {
        return `вы набрали ${points} из ${arr.length}`
    }
    return `
    <div class="progress">Вопрос ${obj.id} из ${arr.length}</div>
        <div class="question">${obj.question}</div>
        <div class="options">
        ${obj.options.map((el, index) => {
        return `<div class="option ${index === obj.correctAnswer}" data-correct="${index === obj.correctAnswer}">${el}</div>`
    }).join('')}
            
        </div>
        <button data-next="true" class="next-btn">Далее</button>
    `
}

quizContainer.classList.remove('show');
setTimeout(() => {
    quizContainer.classList.add('show');
}, 10);

// Добавьте в начало файла
document.addEventListener('DOMContentLoaded', function () {
    // Оптимизация для мобильных касаний
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('touchstart', function () {
            this.classList.add('option-touch');
        });
        option.addEventListener('touchend', function () {
            this.classList.remove('option-touch');
        });
    });
});

