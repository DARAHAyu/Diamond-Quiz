import quizData  from "../data/quizdata.js";

let currentQuestionIndex = 0;
let score = 0;

function shuffle(array) {
    for (let i = (array.length - 1); i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// クイズ開始時に選択肢をシャッフル
shuffle(quizData);

function displayQuestion() {
    const question = document.getElementById('question');
    const scoreDisplay = document.getElementById('score');
    
    // 現在の質問と選択肢を表示
    question.textContent = quizData[currentQuestionIndex].question;
    quizData[currentQuestionIndex].choices.forEach((choice, index) => {
        const button = document.getElementById(`btn${index}`);
        button.textContent = choice;
        button.onclick = () => checkAnswer(choice);
    });
    
    // スコアを更新
    scoreDisplay.textContent = `スコア: ${score}`;
}

function checkAnswer(choice) {
    if (choice === quizData[currentQuestionIndex].answer) {
        switch (quizData[currentQuestionIndex].difficulty) {
            case '1':
                score += 10;
                alert('正解です。');
                break;
            case '2':
                score += 20;
                alert('正解です。');
                break;
            case '3':
                score += 30;
                alert('正解です。');
                break;
            case '4':
                score += 40;
                alert('正解です。');
                break;
            case '5':
                score += 50;
                alert('正解です。');
                break;
            default:
                break;
        }
    } else {
        alert('不正解です。');
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        alert(`クイズ終了！あなたのスコアは ${score} 点です。`);
        resetQuiz();
    }
}

// もしクイズが終了したら、最初の質問を表示する
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    shuffle(quizData);
    displayQuestion();
}

// クイズの初期表示
displayQuestion();