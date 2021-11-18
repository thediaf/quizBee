import React from "react";
import ReactDOM from "react-dom";
import './assets/style.css';
import QuizService from './quizService/index';
import QuestionBox from "./component/QuestionBox";
import Result from "./component/Result";

class QuizBee extends React.Component{
    state = {
        questionsBank: [],
        responses: 0,
        score: 0,
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

    computeAnswer = (answer, correct) => {
        if (answer == correct)
        {
            this.setState({
                score: this.state.score + 1
             })
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        })
    }

    playAgain = () => {
        this.getQuestions();

        this.setState({
            responses: 0,
            score: 0
        })
    }

    render(){
        return (
            <div className="container">
                <div className="title">
                    Quiz bee
                </div>
                <div>
                    {this.state.questionsBank.length > 0 &&
                        this.state.responses < 5 &&
                        this.state.questionsBank.map(({question, answers, correct, questionId}) => 
                            <h4>
                                <QuestionBox 
                                    question={question} 
                                    options={answers} 
                                    key={questionId}
                                    selected={answers => this.computeAnswer(answers, correct)}
                                />
                            </h4>
                        )
                    }

                    {this.state.responses === 5 ?
                        (<Result score={this.state.score} playAgain={this.playAgain} />) : null
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