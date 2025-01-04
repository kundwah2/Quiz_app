const questionForm = document.getElementById("question-form");
const questionInput = document.getElementById("question");
const answer1Input = document.getElementById("answer1");
const answer2Input = document.getElementById("answer2");
const answer3Input = document.getElementById("answer3");
const answer4Input = document.getElementById("answer4");
const correctAnswerInput = document.getElementById("correct-answer");

questionForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const newQuestion = {
        question: questionInput.value,
        answers: [
            answer1Input.value,
            answer2Input.value,
            answer3Input.value,
            answer4Input.value
        ],
        correctAnswer: correctAnswerInput.value
    };

    // Store or process the new question here
    console.log("New Question Added: ", newQuestion);

    // Clear the inputs
    questionInput.value = "";
    answer1Input.value = "";
    answer2Input.value = "";
    answer3Input.value = "";
    answer4Input.value = "";
    correctAnswerInput.value = "";
});
