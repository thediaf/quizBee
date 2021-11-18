import React, {useState} from "react";

const QuestionBox = ({question, options, keyt}) => {
    const [answer, setAnswer] = useState(options);
    console.log(setAnswer);
    let answers = [];
    for (const option of options) {
        answers.push(<button className="answerBtn">{option}</button>)
    }
    return (
        <div className="questionBox" key= {keyt}>
            <div className="question">{question}</div>
            <div className="answers">
                {answer.map((text, index) => (
                    <button className="answerBtn" 
                            key={index} 
                            onClick={() => { setAnswer([text])} }
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