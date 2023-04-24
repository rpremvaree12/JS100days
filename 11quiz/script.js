class Quiz{
    constructor(question){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;

    }

    getQuestion(){
        return this.questions[this.questionsIndex];
    }

    guess(answer){
        if(this.getQuestion().isCorrectAnswer(answer)){
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded(){
        return this.questionIndex === this.questions.length
    }

}

class Question{
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice){
        return this.answer === choice;
    }
}

//display question

function displayQuestion(){
    if(quiz.isEnded()){
        showScore();

    }else{
        let questionElement = document.querySelector("#question");
        questionElement.innerHTML = quiz.getQuestion();
        console.log(questionElement)

        // show options
        let choices = quiz.getQuestion();

        for(let i = 0; i<choices.length; i++){
            let choiceElement = document.querySelector("#choice"+i);
            choiceElement.innerHTML = choices[i];
            guess("btn"+i,choices[i]);
        }
        showProgress();
    }
}


// guess function

function guess(id, guess){
    let button = document.querySelector(id);
    button.onclick = function(){
        quiz.guess(guess);
        displayQuestion();
    }
}
// progress function
function showProgress(){
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.querySelector("#progress");
    progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.question.length}`;
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

// create quiz questions

let questions = [
    new Question("What does Hyper Text Markup Language Stand for?",
    ["JQuery", "XHTML","CSS","HTML"],
    "HTML"
    )
];

let quiz = new Quiz(questions);

//display questions
displayQuestion();

