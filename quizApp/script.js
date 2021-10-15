const quizData = [
    //1
    {
        question: 'How old are Zodiac Hasbro?',
        a: '10',
        b: '17',
        c: '20',
        d: '100',
        correct: 'c'
    },
    //2
    {
        question: 'What is the best programming language of 2021',
        a: 'Java',
        b: 'Python',
        c: 'C#',
        d: 'JS',
        correct: 'd'

    },
    //3
    {
        question: 'Who is the president of Kazakhstan Republic now?',
        a: 'Nazarbaev',
        b: 'Tokaev',
        c: 'Trump',
        d: 'Putin',
        correct: 'b'
    },
    //4 
    {
        question: 'What is the capital of Kazakhstan Republic?',
        a: 'Almaty',
        b: 'Nur-Sultan',
        c: 'New York',
        d: 'Moskow',
        correct: 'b'
    },
    //
    {
        question: 'Population of Kazakhstan Republic?',
        a: '19 million',
        b: '1 billion',
        c: '343 million',
        d: '15 million',
        correct: 'a'
    }
]

const answerEls = document.querySelectorAll(".answer");


const quiznEl = document.getElementById('quiz');


const questionEl = document.getElementById('question');


const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');


let currentQuiz = 0;

let answer = undefined;

let score = 0;

loadQuiz();

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;

    b_text.innerText = currentQuizData.b;

    c_text.innerText = currentQuizData.c;

    d_text.innerText = currentQuizData.d;

}

function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
             answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}

//FOR SUBMITING AND GO TO NEXT QUESTION
submitBtn.addEventListener('click',()=>{
    const answer = getSelected();
    if(answer){
       if(answer === quizData[currentQuiz].correct){
           score++;
       }
    currentQuiz++;
    
    //condition

    if(currentQuiz<quizData.length){
        loadQuiz();
    }

    else{
        //to do: show results
        quiz.innerHTML = 
        `<h2>
            You answered correctly at ${score}/${quizData.length} questions 
        </h2>
        
        <button onclick="location.reload()"> 
            Try Again!
        </button>`
    }
    }
    
});