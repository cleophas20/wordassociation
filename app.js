const scoreDisplay = document.getElementById('score-display')
const questionDisplay = document.getElementById('question-display')

const questions = [
  {
    quiz: ['value', 'estimate', 'evaluate'],
    options: ['jury', 'assess'],
    correct: 2
  },
  {
    quiz: ['close', 'near', 'next'],
    options: ['trace', 'adjacent'],
    correct: 2
  },
  {
    quiz: ['fast', 'quick', 'prompt'],
    options: ['charity', 'rapid'],
    correct: 2
  }
  {
    quiz: ['apple', 'banana', 'orange'],
    options: ['burger', 'cherry'],
    correct: 2
  },
  {
    quiz: ['slow', 'snail', 'drag'],
    options: ['run', 'walk'],
    correct: 1
  }
]

let score = 0
scoreDisplay.textContent = score

function populateQuestions() {
  questions.forEach(question => {
    const questionBox = document.createElement('div')
    questionBox.classList.add('question-box')
  })
}
