const introParagraph = document.getElementById("introParagraph");
const questionContainer = document.getElementById("questionContainer");
const optionsContainer = document.getElementById("optionsContainer");
const nextButton = document.getElementById("nextButton");
const scoreContainer = document.getElementById("scoreContainer");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart");

let currentQuestionIndex = 0;
let score = 0;
let attemptCount = 0;

const quizData = [
  {
    question: "What type of brackets do arrays use?",
    options: ["{Curly Brackets}", "[Square Brackets]", "(Round Brackets)", "<Angle Brackets>"],
    answer: 1
  },
  {
    question: "What does `continue` do inside a loop?",
    options: [
      "Skips a current iteration and moves onto the next in the loop.",
      "Restarts the loop from the beginning.",
      "Terminates the loop without finishing.",
      "Exits the loop completely."
    ],
    answer: 0
  },
  {
    question: "If I write for (let i = 10; i > 0; i--), what direction does the loop move?",
    options: [
      "The loop moves in a randomized order.",
      "The loop does not execute.",
      "The loop moves in a descending order.",
      "The loop counts in an ascending order."
    ],
    answer: 2
  },
  {
    question: "What is the main benefit of separating the CSS from the JavaScript code?",
    options: [
      "It makes the script run faster.",
      "It prevents items from working.",
      "It allows CSS to be reused and keep code cleaner.",
      "It hides HTML content."
    ],
    answer: 2
  },
  {
    question: "Where do you write JavaScript in a web project?",
    options: [
      "In an image file.",
      "In the CSS file.",
      "In your browser's console bar.",
      "In a .js file linked to the HTML using the <script> tag."
    ],
    answer: 3
  },
  {
    question: "What is the MAIN purpose of a loop in programming?",
    options: [
      "To add color to web pages.",
      "To store information.",
      "To repeat instructions until a condition is met.",
      "To make decisions between two options."
    ],
    answer: 2
  }
];

function updateIntro() {
  attemptCount++;
  const intros = [
    "Welcome to the JavaScript Fundamentals Quiz! Test your knowledge below.",
    "Ready for another round? Let’s see if you can beat your last score!",
    "Back again? A coding legend in the making!",
    "You’re unstoppable! Let’s improve that score even more."
  ];
  introParagraph.textContent = intros[Math.min(attemptCount - 1, intros.length - 1)];
}

function showQuestion() {
  const current = quizData[currentQuestionIndex];
  questionContainer.textContent = current.question;
  optionsContainer.innerHTML = "";
  current.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.textContent = optionText;
    button.classList.add("optionButton");
    button.addEventListener("click", () => selectAnswer(index, button));
    optionsContainer.appendChild(button);
  });
  scoreDisplay.textContent = `Current Score: ${score} / ${quizData.length}`;
  scoreContainer.classList.remove("hidden");
}

function selectAnswer(selectedIndex, selectedButton) {
  const correctIndex = quizData[currentQuestionIndex].answer;
  const buttons = document.querySelectorAll(".optionButton");
  buttons.forEach(btn => btn.disabled = true);
  if (selectedIndex === correctIndex) {
    score++;
    selectedButton.classList.add("correct");
  } else {
    selectedButton.classList.add("incorrect");
    buttons[correctIndex].classList.add("correct");
  }

  scoreDisplay.textContent = `Current Score: ${score} / ${quizData.length}`;
  scoreContainer.classList.remove("hidden");

  setTimeout(() =>{
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    showFinalScore();
  }
  }, 1000);
}

function showFinalScore() {
  document.getElementById("quizContainer").classList.add("hidden");
  nextButton.classList.add("hidden");
  questionContainer.style.display = "none";
  optionsContainer.style.display = "none";
  introParagraph.style.display = "none";
  document.getElementById*("quizContainer").classList.add("hidden");
  scoreContainer.classList.remove("hidden");
  scoreDisplay.textContent = `Final Score: ${score} / ${quizData.length}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  questionContainer.style.display = "block";
  optionsContainer.style.display = "block";
  introParagraph.style.display = "block";
  document.getElementById("quizContainer").classList.remove("hidden");
  scoreContainer.classList.add("hidden");
  
  updateIntro();
  showQuestion();
}


nextButton.addEventListener("click", () => {
  nextButton.style.display = "none";
  updateIntro();
  showQuestion();
});

nextButton.classList.add("hidden");

restartButton.addEventListener("click", restartQuiz);
