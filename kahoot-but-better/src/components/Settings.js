import React, {useState} from "react";

function Settings() {
    const [amount, setAmount] = useState(10)
    const url = "https://opentdb.com/api.php?amount="+amount+"&category=20"
    console.log(url);


    const handleChange = event => {
        if (isNaN(event.target.value)) {
            alert("The amount has to be a number, please re-enter a number")
        } else {
            setAmount(event.target.value)
        }
    }

    const getQuestions = async() => {
        const res = await fetch(url);
        let data = await res.json();
        console.log(data);
        return data;
    }

    return (
        <div className="settings">
            <form>
                <label htmlFor="amount">How many questions do you want?</label>
                <input type="text" name="amount" id="amount" onChange={handleChange} required></input>
                <button type={"submit"} onClick={getQuestions}>Submit</button>
            </form>
        </div>
    )
}

export default Settings