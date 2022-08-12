import React from "react";
import Settings from "../Helpers/Settings";

function Form(props) {

    return (
        <div className="Container">
                <label htmlFor="amount">How many questions do you want?</label>
                <input type="text" name="amount" id="amount" onChange={Settings.handleAmount} required></input>
                <select id="categories" name="categories">
                </select>
                <button onClick={props.searchQuestions}>Submit</button>
        </div>

    )
}

export default Form