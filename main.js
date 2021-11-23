//FRÅGOR

// const AllQuestions = [
//     {
//         question: 'Det finns inga pingviner i Afrika.',
//         a: "Sant",
//         b: "Falskt", //RÄTT
//         correct: "b",
//     },
//     {
//         question: 'Trots storleken på deras hjärnor har elefanter dåligt minne.',
//         a: "Sant",
//         b: "Falskt", //RÄTT
//         correct: "b",
//     },
//     {
//         question: 'Hästar kan sova ståendes.',
//         a: "Sant", //RÄTT
//         b: "Falskt",
//         correct: "a",
//     },
//     {
//         question: 'Vilda elefanter finns i två världsdelar, vilka? ',
//         a: "Afrika, Asien", //RÄTT
//         b: "Sydamerika, Asien",
//         c: "Europa, Afrika",
//         correct: "a",
//     },
//     {
//         question: 'Vilken haj är världens största fiskart?',
//         a: "Vithaj",
//         b: "Valhaj", //RÄTT
//         c: "Pigghaj",
//         correct: "b",
//     },
//     {
//         question: 'Vad kallas sälungen med ett ord på tre bokstäver?',
//         a: "Pul",
//         b: "Sut",
//         c: "Kut", //RÄTT
//         correct: "c",
//     },
//     {
//         question: 'Vilka svanarter förekommer i Sverige?',
//         a: "Sångsvan", //RÄTT
//         b: "Svarthalsad svan",
//         c: "Knölsvan", //RÄTT
//         d: "Svart svan",

//         correct: "a",
//         correct: "c",
//     }
// ];
let resultat = document.querySelector("#resultat");
let quiz = document.querySelector("#quiz");
let getResult = document.querySelector("#result");
let darkMode = document.querySelector(".toggleButton");

darkMode.addEventListener("click", () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
});

getResult.addEventListener("click", (e) => {
    score = 0;
    if (document.forms[0].elements[2].checked == true) {
        score++;
    }
    if (document.forms[0].elements[5].checked == true) {
        score++;
    }
    if (document.forms[0].elements[7].checked == true) {
        score++;
    }
    if (document.forms[0].elements[10].checked == true) {
        score++;
    }
    if (document.forms[0].elements[15].checked == true) {
        score++;
    }
    if (document.forms[0].elements[20].checked == true) {
        score++;
    }
    if (document.forms[0].elements[22].checked == true && document.forms[0].elements[24].checked == true) {
        score++;
    }
    getResult.style.display = "none";
    quiz.style.display = "none";

    if (score === 7) {
        resultat.textContent = `${score}`
        resultat.style.color = "green";
    } else if (score >= 4) {
        resultat.textContent = `${score}`
        resultat.style.color = "orange";
    } else {
        resultat.textContent = `${score}`
        resultat.style.color = "red";
    }
    document.forms[0].reset();
})
