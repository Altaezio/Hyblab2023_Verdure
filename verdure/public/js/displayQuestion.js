"use strict";

let current_question_number = 1;

// The function used to fetch the data from the api and show the question text
const questions = async function(){
    let response = await fetch('api/question/' + current_question_number);
    const data = await response.json();

    document.getElementById('question-title-text').innerHTML = data.question;

    createAnswers(data.choices);
};