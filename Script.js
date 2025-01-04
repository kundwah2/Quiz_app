const questionEl = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

const questions = [
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    }
];

let currentQuestionIndex = 0;

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    answerButtons.innerHTML = "";
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("btn");
        button.addEventListener("click", checkAnswer);
        answerButtons.appendChild(button);
    });
}

function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        resultEl.textContent = "Correct!";
    } else {
        resultEl.textContent = "Wrong!";
    }

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = "none";
        resultEl.textContent = "";
    } else {
        resultEl.textContent = "Quiz Finished!";
        nextButton.style.display = "none";
    }
});

showQuestion();

