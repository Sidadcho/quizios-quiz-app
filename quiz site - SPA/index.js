
const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const codingBtn = document.querySelector('.coding-btn');
const scienceBtn = document.querySelector('.science-btn');
const animalsBtn = document.querySelector('.animals-btn');
const mathsBtn = document.querySelector('.maths-btn');

const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const optionList = document.querySelector('.option-list');

const optionOne = document.querySelector('.option-one');
const optionTwo = document.querySelector('.option-two');
const optionTrhee = document.querySelector('.option-three');
const optionFour = document.querySelector('.option-four');

startBtn.addEventListener('click', () => {
    popupInfo.classList.add('active');
    main.classList.add('active');

})
exitBtn.addEventListener('click', () => {
    popupInfo.classList.remove('active')
    main.classList.remove('active');

})


codingBtn.addEventListener('click', () => {
    questions = codingQuestions;
    quizSection.classList.add('active')
    popupInfo.classList.remove('active')
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestion(0)
    questionCounting(1)
    headerScore();
})

scienceBtn.addEventListener('click', () => {
   questions = scienceQuestions;

    quizSection.classList.add('active')
    popupInfo.classList.remove('active')
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestion(0)
    questionCounting(1)
    headerScore();
})

animalsBtn.addEventListener('click', () => {
   questions = animalsQuestions;

    quizSection.classList.add('active')
    popupInfo.classList.remove('active')
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestion(0)
    questionCounting(1)
    headerScore();
})

mathsBtn.addEventListener('click', () => {
   questions = mathsQuestions;

    quizSection.classList.add('active')
    popupInfo.classList.remove('active')
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestion(0)
    questionCounting(1)
    headerScore();
})

let questionCounter = 1;
let questionCount = 0;
let userScore = 0;

const nextBtn = document.querySelector('.next-btn');
nextBtn.textContent = 'Next'
const cancelBtn = document.querySelector('.cancel-btn');
cancelBtn.textContent = 'Cancel'


cancelBtn.addEventListener('click', ()=>{
    
    if (questionCount <= questions.length - 1) {
        option.forEach(option => {
    
            option.classList.remove('correct', 'incorrect', 'disabled')
            nextBtn.classList.remove('active')
            quizSection.classList.remove('active')

            questionCount = 0;
            nextBtn.textContent = 'Next'
            nextBtn.classList.remove('active')
            userScore = 0;
            questionCounter = 1;
        })
    } 
})



nextBtn.addEventListener('click', () => {

    if (questionCount < questions.length - 1) {

        questionCount++;
        showQuestion(questionCount);
        questionCounter++
        questionCounting(questionCounter);

        option.forEach(option => {
            option.classList.remove('correct', 'incorrect', 'disabled')
            nextBtn.classList.remove('active')
        })

        if (questionCount >= questions.length - 1) {
            nextBtn.textContent = 'Finish'
        }
    } else {
        quizSection.classList.remove('active')
        option.forEach(option => {
            option.classList.remove('correct', 'incorrect', 'disabled');

        })
        questionCount = 0;
        nextBtn.textContent = 'Next'
        nextBtn.classList.remove('active')
        userScore = 0;
        questionCounter = 1;

    }
});

const option = document.querySelectorAll('.option');

function showQuestion(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb} . ${questions[index].question}`;

    optionOne.textContent = questions[index].options[0];
    optionTwo.textContent = questions[index].options[1];
    optionTrhee.textContent = questions[index].options[2];
    optionFour.textContent = questions[index].options[3];

    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)')
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent.trim();
    let correctAnswer = questions[questionCount].answer;
    let everyOption = optionList.children.length;

    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore()
    } else {
        answer.classList.add('incorrect');

        for (let i = 0; i < everyOption; i++) {
            if (optionList.children[i].textContent.trim() == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }
    }

    for (let i = 0; i < everyOption; i++) {
        optionList.children[i].classList.add('disabled')
    }

    nextBtn.classList.add('active')
}


function questionCounting(index) {
    const questionsNumb = document.querySelector('.question-total');
    questionsNumb.textContent = `${index} of ${questions.length} Questions`
}


function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `score: ${userScore} / ${questions.length}`
}