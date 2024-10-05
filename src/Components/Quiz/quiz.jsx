import React, { useState, useEffect } from 'react';
import './Quiz.css';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]); // Track user's answers
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Fetch quiz data from the backend
  useEffect(() => {
    fetch('http://localhost:5000/api/quiz')
      .then(response => response.json())
      .then(data => {
        setQuestions(data.map(q => q.question));
        setOptions(data.map(q => q.options));
        setCorrectAnswers(data.map(q => q.correctAnswer));
      })
      .catch(error => console.error('Error fetching quiz:', error));
  }, []);

  const handleAnswerClick = (selectedAnswer) => {
    // Record user's answer
    setUserAnswers(prev => [...prev, selectedAnswer]);

    // Move to the next question or finish the quiz
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Ensure the last answer is recorded before submission
      handleSubmitQuiz(); 
    }
  };

  // Submit the quiz result to the backend
  const handleSubmitQuiz = () => {
    // Record the last answer if quiz is finished
    if (currentQuestion === questions.length - 1) {
      const selectedAnswer = options[currentQuestion]; // Collect current question options
      const userSelectedAnswer = selectedAnswer.find(option => option === userAnswers[userAnswers.length - 1]);
      setUserAnswers(prev => [...prev, userSelectedAnswer]);
    }

    const username = prompt('Enter your username:');

    fetch('http://localhost:5000/api/quiz/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, answers: userAnswers }) // Send user's answers
    })
      .then(response => response.json())
      .then(data => {
        alert(`Quiz Completed! Your score is ${data.score}/${questions.length}`);
        setQuizCompleted(true);
        setScore(data.score);
      })
      .catch(error => console.error('Error submitting quiz:', error));
  };

  return (
    <div id="quiz" className="quiz">
      <div className="quiz-container">
        <h1>Customer Service Quiz</h1>
        {quizCompleted ? (
          <h2>Your final score: {score}/{questions.length}</h2>
        ) : questions.length > 0 ? (
          <div className="question-section">
            <h2>{questions[currentQuestion]}</h2>
            <div className="options-section">
              {options[currentQuestion].map((option, index) => (
                <button key={index+1} className="quiz-option" onClick={() => handleAnswerClick(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <h2>Loading quiz questions...</h2>
        )}
      </div>
    </div>
  );
};

export default Quiz;
