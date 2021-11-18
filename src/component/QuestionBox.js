import React, {useState} from "react";

const QuestionBox = ({question, options, selected}) => {
    const [answer, setAnswer] = useState(options);
    
    let answers = [];
    for (const option of options) {
        answers.push(<button className="answerBtn">{option}</button>)
    }
    return (
        <div className="questionBox">
            <div className="question">{question}</div>
            <div className="answers">
                {answer.map((text, index) => (
                    <button className="answerBtn" 
                            key={index} 
                            onClick={() => { setAnswer([text]);
                                    selected(text);
                            }}
                    >
                        {text}
                    </button>
                )
                )}
            </div>
        </div>
    );
}

export default QuestionBox;