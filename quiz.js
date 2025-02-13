const questions = [
    { question: "Loading...", answers: ["Next"], correct: "Next" },
    { question: "What is my favorite color?", answers: ["Red", "Blue", "Pink"], correct: "Pink" },
    { question: "How many months have we been together?", answers: ["3", "5", "7"], correct: "5" }
];

let currentQuestion = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");

    questionElement.textContent = questions[currentQuestion].question;
    answersElement.innerHTML = "";

    questions[currentQuestion].answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(answer);
        answersElement.appendChild(btn);
    });
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            endQuiz();
        }
    }
}

function nextQuestion() {
    loadQuestion();
}

function endQuiz() {
    document.getElementById("quiz-container").style.display = "none"; // Hide quiz
    document.getElementById("result").style.display = "flex"; // Show result
}

function showLetter() {
    alert("Your love letter opens! 💌");
}

// Ensure only quiz container is visible on start
document.getElementById("quiz-container").style.display = "flex";
document.getElementById("result").style.display = "none";

// Start the quiz
loadQuestion();

