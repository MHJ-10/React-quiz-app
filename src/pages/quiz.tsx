import React, { useContext, useState } from "react";
import QuestionCard from "../components/questionCard";
import userAnswersContext from "../contexts/userAnswersContext";
import { LoadQuestionHook } from "../hooks/loadQuestionsHook";
import useQuestions from "../hooks/useQuestions";
import useQuiz from "../hooks/useQuiz";

const Quiz = () => {
  const [number, setNumber] = useState<number>(0);
  const { questions } = useQuestions();
  const { dispatch } = useContext(userAnswersContext);
  const { quizInfo } = useQuiz();

  LoadQuestionHook(quizInfo.amount, quizInfo.category);

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;
    const correct = questions[number].correct_answer === answer;
    const answerObject = {
      question: questions[number].question,
      answer: answer,
      correct: correct,
      correctAnswer: questions[number].correct_answer,
    };
    dispatch({ type: "ADD_USER_ANSWER", userAnswer: answerObject });
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
