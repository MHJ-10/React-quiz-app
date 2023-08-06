import React, { useContext, useState } from "react";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import userAnswersContext from "../contexts/userAnswersContext";
import { LoadTimeHook } from "../hooks/loadTimeHook";
import { AnswerObject, AppContext } from "../hooks/stateContext";

interface QuestionDetails {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestion: number;
  onNext: () => void;
  onPrevious: () => void;
}

const QuestionCard = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestion,
  onNext,
  onPrevious,
}: QuestionDetails) => {
  const [time, setTime] = useState<number>(totalQuestion * 10);
  const { questions } = useContext(AppContext);
  const { userAnswers } = useContext(userAnswersContext);
  const progressPercent = (questionNumber / totalQuestion) * 100;

  LoadTimeHook({ time, setTime });

  const handleDisabled = () => {
    const showedQuestion = questions.find(
      (question) => question.answers === answers
    );

    const selectedAnswer = userAnswers.find(
      (userAnswer) => userAnswer.question === showedQuestion?.question
    );

    return selectedAnswer !== undefined || time <= 0;
  };

  return (
    <div className="position-relative mx-2 rounded rounded-4 bg-light bg-opacity-50">
      <h4 className={time <= 15 ? "text-danger" : "text-dark"}>
        Time:{time}s{" "}
      </h4>
      <h5>Question: {questionNumber + "/" + totalQuestion}</h5>
      <div className="progress w-50 mx-auto">
        <div className={`bg-danger + w-${progressPercent.toFixed()}`}></div>
      </div>
      <h4>{question}</h4>
      {answers.map((answer) => {
        return (
          <div className="row">
            <div className="col">
              <button
                className="btn btn-warning border border-2 border-danger w-50 m-2"
                onClick={callback}
                value={answer}
                disabled={handleDisabled()}
              >
                {answer}
              </button>
            </div>
          </div>
        );
      })}
      <div>
        <button
          onClick={onPrevious}
          disabled={questionNumber === 1 ? true : false}
          className="btn btn-warning btn-sm rounded rounded-circle border-border-2 border-danger position-absolute top-50 start-0 ms-3 mt-5"
        >
          <h4 className="text-danger">
            {" "}
            <ArrowLeft />{" "}
          </h4>
        </button>
        <button
          onClick={onNext}
          disabled={questionNumber === totalQuestion ? true : false}
          className="btn btn-warning btn-sm rounded rounded-circle border-border-2 border-danger position-absolute top-50 end-0 me-3 mt-5"
        >
          <h4 className="text-danger">
            {" "}
            <ArrowRight />{" "}
          </h4>
        </button>
      </div>

      <div>
        <Link
          to="/result"
          className="btn btn-danger border border-warning my-2"
        >
          Finish
        </Link>
      </div>
    </div>
  );
};

export default QuestionCard;
