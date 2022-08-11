import React from "react";
import {useState} from "@types/react";

function Form(props) {
    const [amount, setAmount] = useState(10)

    const handleAmount = event => {
        if (isNaN(event.target.value)) {
            alert("The amount has to be a number, please re-enter a number")
        } else {
            setAmount(event.target.value)
            return amount
        }
    }
    return (
        <div className="Container">
            <form>
                <label htmlFor="amount">How many questions do you want?</label>
                <input type="text" name="amount" id="amount" onChange={handleAmount} required></input>
                <select id="categories" name="categories">
                </select>
                <button type={"submit"} onClick={props.getQuestions}>Submit</button>
            </form>
        </div>

    )
}

export default Form