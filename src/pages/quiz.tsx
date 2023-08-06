import React, { useState, useContext } from "react";
import { AppContext } from "../hooks/stateContext";
import { LoadQuestionHook } from "../hooks/loadQuestionsHook";
import QuestionCard from "../components/questionCard";
import quizContext from "../contexts/quizContext";

const Quiz = () => {
  const { questions, setQuestions } = useContext(AppContext);
  const [number, setNumber] = useState<number>(0);
  const { userAnswers, setUserAnswers } = useContext(AppContext);
  const { quizInfo } = useContext(quizContext);

  LoadQuestionHook(quizInfo.amount, quizInfo.category, setQuestions);

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;
    const correct = questions[number].correct_answer === answer;
    const answerObject = {
      question: questions[number].question,
      answer: answer,
      correct: correct,
      correctAnswer: questions[number].correct_answer,
    };
    setUserAnswers((prev) => [...prev, answerObject]);
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    setNumber(nextQuestion);
  };

  const previousQuestion = () => {
    const prevQuestion = number - 1;
    setNumber(prevQuestion);
  };

  return (
    <div className="quiz text-center bg-dark bg-gradient rounded rounded-4 my-3 mx-4">
      <h2 className="text-light">Quiz</h2>
      {questions.length === 0 && (
        <div>
          <div className="spinner-border text-danger text-center mx-auto"></div>
          <div>
            {" "}
            <h5 className="text-danger">Please wait to load questions...</h5>
          </div>
        </div>
      )}
      {questions.length !== 0 && (
        <div className="py-3">
          <QuestionCard
            question={questions[number].question}
            answers={questions[number].answers}
            questionNumber={number + 1}
            totalQuestion={quizInfo.amount}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
            onNext={nextQuestion}
            onPrevious={previousQuestion}
          />
        </div>
      )}
    </div>
  );
};

export default Quiz;
