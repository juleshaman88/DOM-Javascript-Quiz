const createIntroParagraph = document.getElementById("introParagraph");
const createQuestionContainer = document.getElementById("questionContainer");
const createOptionsContainer = document.getElementById("optionsContainer");
const scoreContainer = document.getElementById("scoreContainer");

let intro = document.getElementById("introParagraph");
intro.textContent = ("Welcome to the Javascript Fundamentasl Quiz! Test your knowledge below.");

function createQuestion(){
    let question = ["What type of brackets do arrays use?", "What does continue do inside a loop?", "If I write for (let i = 10; i > 0; i--), what direction does the loop move?", "What is the main benefit of separating the CSS from the JavaScript code?", "Where do you write JavaScript in a web project?", "What is the MAIN purpose of a loop in programming?"];
}

function createQuestionContainer (){
    const question = document.createElement("p");
    question.classList.add("question");
    
}