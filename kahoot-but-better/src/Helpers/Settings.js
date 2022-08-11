import React, {useState} from "react";
import Form from "../components/Form";


class Settings{
     amount = 10;
     urlQuestions = "";

     handleAmount(){

     }
}


function Settings(props) {

    return (
        <>
       <Form amountSetting={handleAmount} getQuestions={getQuestions} />
        </>
    )
}


export default Settings
