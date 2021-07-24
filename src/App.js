import React, {useState, useEffect} from 'react';
// import './App.css';
import './components/QuestionBox'
import QuestionBox from './components/QuestionBox';

const url = "https://opentdb.com/api.php?amount=10&type=multiple";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function shuffle(arr){

  for(let i = 4; i > 1; i--){
      let rand_i = getRandomInt(i);
      let temp = arr[i-1];
      arr[i-1] = arr[rand_i];
      arr[rand_i] = temp;
  }
  
  return arr;
}

function refreshPage(){
  window.location.reload();
}

function App() {
  const [category, setCategory] = useState([]);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch(url).then((res) => res.json()).then((data) => {
      // console.log(data);
      const questions = data.results.map((question) =>({
        ...question,
        answers: shuffle([question.correct_answer, question.incorrect_answers[0], question.incorrect_answers[1], question.incorrect_answers[2]])

      }))

      setQuestions(questions);
      setCategory(data.results.category);
      setCurrIndex(0);
    });
  }, []);

  const handleAnswer = (answer) => {
    if(!showAnswers){
        // console.log("pressed answer:" ,answer);
      if(answer === questions[currIndex].correct_answer){
        // console.log("Correct!!");
        setScore(score + 1);
      }else{
        console.log("Wrong :(");
      }

      setShowAnswers(true);
    }
  };

  const handleNextQuestion = () => {
    setShowAnswers(false);
    setCurrIndex(currIndex +1);
  };

  return (questions.length > 0 ? 
    currIndex >= questions.length ? 
  (<div className='container grid-cols-1 gap 6'>
    <div><h1>Game Over! your score is: {score}</h1></div>
    
    <button
    className='bg-gray-300 p-2 rounded' 
    onClick={refreshPage}> Play Again</button>
  </div>) :
    (<div className='container'>
      <QuestionBox 
      data={questions[currIndex]} 
      handleAnswer={handleAnswer} 
      currIndex={currIndex}
      category={category}
      showAnswers={showAnswers}
      handleNextQuestion={handleNextQuestion} 
      score={score}/>
    </div>
      
    ):(
      <h2>
        Loading..
      </h2>
    )
  );
}

export default App;
