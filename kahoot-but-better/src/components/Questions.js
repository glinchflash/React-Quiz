import React from "react";
import {useState} from "@types/react";
import Settings from "../Helpers/Settings";
import Form from "./Form";

function DisplayQuestions(){
    <Form getQuestions={getQuestions()}/>

    const urlQuestions = "https://opentdb.com/api.php?amount=" + amount + "&category=20";
    const [questions, setQuestions] = useState([]);


    const getQuestions = async e => {
        const questionsArr=[]
        e.preventDefault();
        try {
            const response = await fetch(urlQuestions);
            const elements = await response.json();
            for (const question of elements.results) {
                questionsArr.push((question.question))
            }
            console.log(questionsArr);
            setQuestions(questionsArr)

        } catch (error) {
            console.log("can't fetch api", error);
        }
    };

    return(
        <>
            {questions ? questions.map((question,i) => {
                    return <p key={i}>{question}</p>
                })
                :<p>There are no questions!</p>
            }
        </>
    )
}

export default DisplayQuestions