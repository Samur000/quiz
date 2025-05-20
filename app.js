const quizContainer = document.querySelector('.quiz-container')
const themes = document.querySelector('.themes')

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