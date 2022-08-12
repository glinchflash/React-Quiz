import '../components/css/Answers.css'
class GetAnswers
{
    static correctAnswer = "";
    static incorrectAnswer = [];

    static setCorrectAnswer(answer){
        this.correctAnswer = answer
    }

    static setIncorrectAnswer(array){
        this.incorrectAnswer = array;
    }

}

export default GetAnswers