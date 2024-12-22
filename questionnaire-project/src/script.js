// Ce fichier contient le code JavaScript qui gère la logique du questionnaire.

const questions = [
    {
        question: "Qui a peint la Mona Lisa ?",
        answers: ["Vincent van Gogh", "Pablo Picasso", "Leonard de Vinci", "Claude Monet"],
        correct: 2
    },
    {
        question: "Quel est le titre de la célèbre sculpture de Michel-Ange ?",
        answers: ["Le Penseur", "David", "La Pietà", "La Vénus de Milo"],
        correct: 1
    },
    {
        question: "Qui a écrit 'Les Misérables' ?",
        answers: ["Victor Hugo", "Gustave Flaubert", "Émile Zola", "Marcel Proust"],
        correct: 0
    },
    {
        question: "Quel mouvement artistique est associé à Andy Warhol ?",
        answers: ["Surréalisme", "Cubisme", "Pop Art", "Impressionnisme"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const question = questions[currentQuestionIndex];
    
    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        <ul>
            ${question.answers.map((answer, index) => `
                <li>
                    <button onclick="checkAnswer(${index})">${answer}</button>
                </li>
            `).join('')}
        </ul>
    `;
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayResults();
    }
}

function displayResults() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <h2>Résultats</h2>
        <p>Vous avez obtenu ${score} sur ${questions.length}.</p>
    `;
}

// Initialiser le questionnaire
displayQuestion();