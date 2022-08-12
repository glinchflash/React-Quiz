import React,{useState} from "react";
import {decode} from 'html-entities';
import Settings from "../Helpers/Settings";
import Form from "./Form";
import './css/Questions.css';

function DisplayQuestions(){
    const [questions, setQuestions] = useState([]);


    const getQuestions = async () => {
        const questionsArr=[]
        console.log('Time to get questions')
        try {
            const response = await fetch(Settings.urlQuestions);
            const elements = await response.json();
            console.log(elements);
            for (const question of elements.results) {
                questionsArr.push((decode(question.question)))
            }
            console.log(questionsArr);
            setQuestions(questionsArr)

        } catch (error) {
            console.log("can't fetch api", error);
            console.log(Settings.urlQuestions);
        }
    };

    return(
        <>
            <Form searchQuestions={getQuestions}/>
            {questions ? questions.map((question,i) => {
                    return <p key={i} className="question">{question}</p>
                })
                :<p>There are no questions!</p>
            }
        </>
    )
}

export default DisplayQuestions