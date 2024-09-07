const quizData = [
    {
        question: "1. Who developed Python Programming Language?",
        a: "Wick van Rossum",
        b: " Rasmus Lerdorf",
        c: "Guido van Rossum",
        d: "Niene Stom",
        correct: "c"
    },
    {
        question: "2. Which type of Programming does Python support?",
        a: "object-oriented programming",
        b: "structured programming",
        c: "functional programming",
        d: "all of the mentioned",
        correct: "d"
    },
    {
        question: "3.Is Python case sensitive when dealing with identifiers?",
        a: "No",
        b: "Yes",
        c: "Machine dependent",
        d: "None of the mentioned",
        correct: "a"
    },
    {
        question: "4.Which of the following is the correct extension of the Python file?",
        a: " .python",
        b: ".pl",
        c: ".py",
        d: ".p",
        correct: "c"
    },
    {
        question: "5.Is Python code compiled or interpreted?",
        a: "Python code is both compiled and interpreted",
        b: "Python code is neither compiled nor interpreted",
        c: "Python code is only compiled",
        d: "Python code is only interpreted",
        correct: "a"
    },
    {
        question: "6.All keywords in Python are in ___",
        a: "Capitalized",
        b: "lower case",
        c: "UPPER CASE",
        d: "None of the mentioned",
        correct: "b"
    },
    {
        question: "7.Which of the following is used to define a block of code in Python language?",
        a: "Indentation",
        b: "Key",
        c: "Brackets",
        d: "All of the mentioned",
        correct: "a"
    },
    {
        question: "8.Which keyword is used for function in Python language?",
        a: "Function",
        b: "def",
        c: "Fun",
        d: "Define",
        correct: "b"
    },
    {
        question: "9.Which of the following character is used to give single-line comments in Python?",
        a: "//",
        b: "#",
        c: "!",
        d: "/",
        correct: "b"
    },
    {
        question: "10.Which of the following functions can help us to find the version of python that we are currently working on?",
        a: " sys.version(1)",
        b: " sys.version(0)",
        c: " sys.version()",
        d: " sys.version",
        correct: "d"
    },
    {
        question: "11.Python supports the creation of anonymous functions at runtime, using a construct called ____",
        a: "pi",
        b: "anonymous",
        c: "lambda",
        d: "None of the mentioned",
        correct: "c"
    },
    {
        question: "12.What is the order of precedence in python?",
        a: "Exponential, Parentheses, Multiplication, Division, Addition, Subtraction",
        b: "Exponential, Parentheses, Division, Multiplication, Addition, Subtraction",
        c: "Parentheses, Exponential, Multiplication, Division, Subtraction, Addition",
        d: "Parentheses, Exponential, Multiplication, Division, Addition, Subtraction",
        correct: "d"
    },
    {
        question: "13.What does pip stand for python?",
        a: "Pip Installs Python",
        b: "Pip Installs Packages",
        c: "Preferred Installer Program",
        d: "All of the mentioned",
        correct: "d"
    },
    {
        question: "14.Which of the following is true for variable names in Python?",
        a: "Underscore and ampersand are the only two special characters allowed",
        b: "Unlimited length",
        c: "All private members must have leading and trailing underscores",
        d: "None of the mentioned",
        correct: "b"
    },
    {
        question: "15.Which of the following is the truncation division operator in Python?",
        a: "|",
        b: "//",
        c: "/",
        d: "%",
        correct: "b"
    },
];

const quiz = document.getElementById('exam');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});
