import React, {useState} from "react";
import {decode} from 'html-entities';
import Settings from "../Helpers/Settings";
import Form from "./Form";
import './css/Questions.css';
import Answers from "../Helpers/Answers";

function DisplayQuestions() {
    const [questions, setQuestions] = useState([]);
    const allAnswers = [];


    const getQuestions = async () => {
        const questionsArr = [];
        const incorrectAnswersArr = [];
        console.log('Time to get questions')
        try {
            const response = await fetch(Settings.urlQuestions);
            const elements = await response.json();
            console.log(elements);


            for (const question of elements.results) {
                questionsArr.push((decode(question.question)))
                Answers.setCorrectAnswer(decode(question.correct_answer))
                incorrectAnswersArr.push(decode(question.incorrect_answers));
                Answers.setIncorrectAnswer(incorrectAnswersArr);
            }
            console.log(questionsArr);
            setQuestions(questionsArr)

        } catch (error) {
            console.log("can't fetch api", error);
            console.log(Settings.urlQuestions);
        }
    };

    function combineAnswers() {
        console.log(Answers.incorrectAnswer);
        console.log(Answers.correctAnswer);
        if(Answers.incorrectAnswer[0].length>1){
            for (const answer of Answers.incorrectAnswer[0]){
                allAnswers.push(answer)
            }
        }else{
            allAnswers.push(Answers.incorrectAnswer[0])
        }
        allAnswers.push(Answers.correctAnswer)
        console.log(allAnswers);
        return (
            allAnswers ? allAnswers.map((answer, i) => {
                return (
                    <button type="submit" key={i} className="answerButton">{answer}</button>
                )
            }) : <p>Answers failed to load</p>
        )
    }

    return (
        <>
            <Form searchQuestions={getQuestions}/>
            {questions ? questions.map((question, i) => {
                    return (
                        <div className="questionAndAnswers">
                            <p key={i} className="question">{question}</p>
                            <div className="answersContainer">
                                {combineAnswers()}
                            </div>
                        </div>
                    )
                })
                : <p>There are no questions!</p>
            }
        </>
    )
}

export default DisplayQuestions