import React from "react";
import ReactDOM from "react-dom";
import './assets/style.css';
import QuizService from './quizService/index';
import QuestionBox from "./component/QuestionBox";

class QuizBee extends React.Component{
    state = {
        questionsBank: []
    };

    getQuestions = () => {
        QuizService().then(questions => {
            this.setState({
                questionsBank: questions
            });
        });
    };

    componentDidMount() {
        this.getQuestions();
    }

    render(){
        return (
            <div className="container">
                <div className="title">
                    Quiz bee
                </div>
                <div>
                    {this.state.questionsBank.length > 0 &&
                        this.state.questionsBank.map(({question, answers, correct, questionId}) => 
                            <h4><QuestionBox question={question} options={answers} keyt={questionId}/></h4>)
                    }
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <QuizBee />,
    document.getElementById("root")
)