const quizData = [
    {
        question: "1. What will be the output of the following code?\n\nx = [\"a\", \"b\", \"c\"]\n\ny = x\n\ny.append(\"d\")\n\nprint(x)",
        a: "[\"a\", \"b\", \"c\"]",
        b: "[\"a\", \"b\", \"c\", \"d\"]",
        c: "[\"a\", \"b\"]",
        d: "Error",
        correct: "b"
    },
    {
        question: "2. What does the len() function return when applied to a string?\n\ns = \"Hello\"\n\nprint(len(s))",
        a: "4",
        b: "5",
        c: "6",
        d: "7",
        correct: "b"
    },
    {
        question: "3. What will be the output of the following code?\n\na = [1, 2, 3, 4, 5]\n\nprint(a[1:3])",
        a: "[1, 2, 3]",
        b: "[2, 3]",
        c: "[2, 3, 4]",
        d: "[3, 4]",
        correct: "b"
    },
    {
        question: "4. Which of the following is the correct syntax to create a set in Python?",
        a: "s = {}",
        b: "s = []",
        c: "s = set()",
        d: "s = ()",
        correct: "c"
    },
    {
        question: "5. What will be the output of the following code?\n\ndef func(x):\n    return [i**2 for i in range(x)]\n\nprint(func(3))",
        a: "[0, 1, 4]",
        b: "[1, 4, 9]",
        c: "[0, 1, 4, 9]",
        d: "[1, 4]",
        correct: "a"
    },
    {
        question: "6. How do you insert an element,'x', at the end of a list,'a'?",
        a: "a.add(x)",
        b: "a.append(x)",
        c: "a.insert(x)",
        d: "a.extend(x)",
        correct: "b"
    },
    {
        question: "7. What will be the output of the following code?\n\nx = 5\ny = 10\n\nprint(x + y if x < y else x - y)",
        a: "15",
        b: "-5",
        c: "5",
        d: "Error",
        correct: "a"
    },
    {
        question: "8. Which of the following statements is true about Python dictionaries?",
        a: "Keys in a dictionary can be mutable.",
        b: "Values in a dictionary cannot be mutable.",
        c: "Dictionaries are unordered collections.",
        d: "You cannot nest dictionaries.",
        correct: "c"
    },
    {
        question: "9. What is the output of the following code?\n\nx = {1, 2, 3}\ny = {2, 3, 4}\n\nprint(x & y)",
        a: "{1, 2, 3}",
        b: "{2, 3}",
        c: "{4, 5}",
        d: "{1, 4}",
        correct: "b"
    },
    {
        question: "10. What does the following list comprehension do?\n\n[x for x in range(10) if x % 2 == 0]",
        a: "Generates numbers from 0 to 9",
        b: "Generates even numbers from 0 to 9",
        c: "Generates odd numbers from 0 to 9",
        d: "Generates all numbers divisible by 2",
        correct: "b"
    },
    {
        question: "11. What will be the output of the following code?\n\ndef f(a, b=[]):\n    b.append(a)\n    return b\n\nprint(f(1))\nprint(f(2))",
        a: "[1] [2]",
        b: "[1] [1, 2]",
        c: "[1, 2] [1, 2]",
        d: "[1] [1]",
        correct: "b"
    },
    {
        question: "12. What will be the output of the following code?\n\nx = \"abcd\"\n\nfor i in range(len(x)):\n    x[i].upper()\n\nprint(x)",
        a: "\"ABCD\"",
        b: "\"abcd\"",
        c: "\"Abcd\"",
        d: "Error",
        correct: "b"
    },
    {
        question: "13. Which of the following is a correct way to create a tuple in Python?",
        a: "t = (1,)",
        b: "t = [1, 2, 3]",
        c: "t = (1)",
        d: "t = {1, 2, 3}",
        correct: "a"
    },
    {
        question: "14. What does the map() function do?",
        a: "It returns a list of results after applying a function to each item in a given iterable.",
        b: "It modifies a list in place.",
        c: "It filters elements in a list based on a condition.",
        d: "It creates a dictionary by mapping keys to values.",
        correct: "a"
    },
    {
        question: "15. Which of the following code snippets will create an empty list?",
        a: "a = []",
        b: "a = list()",
        c: "a = list([])",
        d: "All of the above",
        correct: "d"
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

