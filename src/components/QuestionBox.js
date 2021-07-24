import React from 'react';




const QuestionBox = ({
    showAnswers,
    handleAnswer,
    currIndex,
    handleNextQuestion,
    data: {category, question, correct_answer, answers},
    score}) => {
    return (<div>
        <div  className="grid grid-cols-2 gap-6 mt-6">
        <div>
            <h2>
            Category: {category}
            </h2>
        </div>
        <div className="ml-auto">
            Question: {currIndex+1}/10
        </div>
        </div>
    <div class="container">
        <div class="bg-gray-100 p-10 rounded-lg shadow-md">
            <h2 class="text-2xl text-center" dangerouslySetInnerHTML={{ __html: question}}/>
        </div>
        <div class="grid grid-cols-2 gap-6 mt-6">
            {answers.map((answer) => {
                const textColor= showAnswers ? 'text-white text-shadow' : '';
                const bgColor = showAnswers ? (answer === correct_answer ? 'bg-green-300' : 'bg-red-300') : 'bg-gray-300';
                return (
                <button 
                class={`${bgColor} ${textColor} p-4 rounded`} onClick={() => handleAnswer(answer)} 
                dangerouslySetInnerHTML={{ __html: answer}}/>
            )})}
        </div>
    </div>
    <div class="grid grid-cols-2 gap-6 mt-6">
        <div>
            <h3>
                Current score: {score} 
            </h3>
        </div>
        <div class="ml-auto">
                {showAnswers ? <button 
                onClick={handleNextQuestion}
                class={`p-2 rounded bg-gray-200 text-black bg-opacity-100 text-opacity-100`}>Next Question</button>:
                <button 
                class={`p-2 rounded bg-gray-200 text-black bg-opacity-20 text-opacity-30`}>Next Question</button>}
        </div>
    </div>
    </div>
)};

export default QuestionBox;