// quiz class 
// get question, check if the option chosen is correct
// determine if the quiz has ended

class Quiz{
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestion(){
        return this.questions[this.questionIndex];
    }

    checkGuess(option){
        if(this.getQuestion().isCorrectAnswer(option)){
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded(){
        return this.questionIndex === this.questions.length
    }

}

// question class
// question text, answer options, correct answer

class Question{
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(option){
        // true if the option chosen is the correct answer
        return this.answer === option;
    }
}



//display question
function displayQuestion(){
    if(quiz.isEnded()){
        showScore();
    }
    else{
        let questionElement = document.querySelector("#question");
        questionElement.innerHTML = quiz.getQuestion().text;

        // show options
        let choices = quiz.getQuestion().choices;

        for(let i = 0; i<choices.length; i++){
            // go through all of html elements and set them to the possible choices
            let choiceElement = document.querySelector("#choice"+i);
            choiceElement.innerHTML = choices[i];

            // not sure why calling guess here
            makeGuess("#btn"+i, choices[i])
        }
        showProgress();
    }
}
// guess helper function
function makeGuess(id, guess){
    let button = document.querySelector(id);
    button.onclick = function(){
        quiz.checkGuess(guess);

        // display next question after guessing
        displayQuestion();
    }
}

// progress function
function showProgress(){
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.querySelector("#progress");
    progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

function showScore(){
    let quizEndHTML = 
    `
    <h1> Quiz Complete </h1>
    <h2 id="score"> You Scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
    <a href="index.html"> Take Quiz Again</a>
    </div>
    `;

    let quizElement = document.querySelector("#quiz");
    quizElement.innerHTML = quizEndHTML;
}

// create question banks
let questionBank = [
    new Question("What does Hyper Text Markup Language Stand for?", 
    ["JQuery", "XHTML","CSS","HTML"],
    "HTML"
    ),
    new Question("What does CSS stand for?", 
    ["JQuery", "XHTML","CSS","HTML"],
    "CSS"
    ),
];

let quiz = new Quiz(questionBank);

//display questions
displayQuestion();
