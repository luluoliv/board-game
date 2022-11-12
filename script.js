
/* function closeQuestion() {
    const boxQuestion = document.getElementById[''];
    boxQuestion.style.display = 'none';
}
 */
function popUp1() {
    const box1 = document.getElementById('question1');
    if (box1.style.display == 'none') {
        box1.style.display = 'block';
    } else {
        box1.style.display = 'none';
    }
};
function popUp2() {
    const box2 = document.getElementById('question2');
    if (box2.style.display == 'none') {
        box2.style.display = 'block';
    } else {
        box2.style.display = 'none';
    }
};
function popUp3() {
    const box3 = document.getElementById('question3');
    if (box3.style.display == 'none') {
        box3.style.display = 'block';
    } else {
        box3.style.display = 'none';
    }
};
function popUp4() {
    const box4 = document.getElementById('question4');
    if (box4.style.display == 'none') {
        box4.style.display = 'block';
    } else {
        box4.style.display = 'none';
    }
};
function popUp5() {
    const box5 = document.getElementById('question5');
    if (box5.style.display == 'none') {
        box5.style.display = 'block';
    } else {
        box5.style.display = 'none';
    }
};
function popUp6() {
    const box6 = document.getElementById('question6');
    if (box6.style.display == 'none') {
        box6.style.display = 'block';
    } else {
        box6.style.display = 'none';
    }
};
function popUp7() {
    const box7 = document.getElementById('question7');
    if (box7.style.display == 'none') {
        box7.style.display = 'block';
    } else {
        box7.style.display = 'none';
    }
};
function popUp8() {
    const box8 = document.getElementById('question8');
    if (box8.style.display == 'none') {
        box8.style.display = 'block';
    } else {
        box8.style.display = 'none';
    }
};
function popUp9() {
    const box9 = document.getElementById('question9');
    if (box9.style.display == 'none') {
        box9.style.display = 'block';
    } else {
        box9.style.display = 'none';
    }
};
function popUp10() {
    const box10 = document.getElementById('question10');
    if (box10.style.display == 'none') {
        box10.style.display = 'block';
    } else {
        box10.style.display = 'none';
    }
};
function popUp11() {
    const box11 = document.getElementById('question11');
    if (box11.style.display == 'none') {
        box11.style.display = 'block';
    } else {
        box11.style.display = 'none';
    }
};
function popUp12() {
    const box12 = document.getElementById('question12');
    if (box12.style.display == 'none') {
        box12.style.display = 'block';
    } else {
        box12.style.display = 'none';
    }
};
function popUp13() {
    const box13 = document.getElementById('question13');
    if (box13.style.display == 'none') {
        box13.style.display = 'block';
    } else {
        box13.style.display = 'none';
    }
};
function popUp14() {
    const box14 = document.getElementById('question14');
    if (box14.style.display == 'none') {
        box14.style.display = 'block';
    } else {
        box14.style.display = 'none';
    }
};


const answer = document.querySelectorAll('.answer-text');
let scoreUp = 0;
let scoreDown = 0;


function rightAnswer() {
    scoreUp++
    const rightAnswers = document.getElementById('right')
    rightAnswers.innerHTML = (`Acertos: ${scoreUp}`)
    box14.style.display = 'none';
    alert(`Parabéns! Você é um gênio...`)
}

function wrongAnswer() {
    scoreDown++
    const wrongAnswers = document.getElementById('wrong')
    wrongAnswers.innerHTML = (`Erros: ${scoreDown}`)
    alert('Errou! Tente de novo')
}

function jogarDado(params) {
    const dado = document.getElementById('dado_text')
    dado.innerHTML = Math.floor(5*Math.random()+1)
}