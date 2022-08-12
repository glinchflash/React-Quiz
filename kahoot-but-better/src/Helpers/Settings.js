class Settings{

     static urlQuestions = "https://opentdb.com/api.php?amount=10&category=20";

     static setAmount(amount){
         this.urlQuestions =  "https://opentdb.com/api.php?amount=" + amount + "&category=20";;
     }


    static handleAmount = event => {
        if (isNaN(event.target.value)) {
            alert("The amount has to be a number, please re-enter a number")
        } else {
            this.setAmount(event.target.value)
            console.log(this.urlQuestions);
        }
    }
}


export default Settings