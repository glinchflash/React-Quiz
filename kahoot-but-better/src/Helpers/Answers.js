import '../components/css/Answers.css'
class DisplayAnswers
{
    static correctAnswer = "";
    static incorrectAnswer = []
    static allAnswers = [];

    static setCorrectAnswer(answer){
        this.correctAnswer = answer
    }

    static setIncorrectAnswer(array){
        this.incorrectAnswer = array;
    }

}

export default DisplayAnswers