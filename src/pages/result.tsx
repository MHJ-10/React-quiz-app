import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../hooks/stateContext";
import quizContext from "../contexts/quizContext";

const Result = () => {
  const { userAnswers, setUserAnswers, questions, setQuestions } =
    useContext(AppContext);
  const { quizInfo } = useContext(quizContext);
  const renderPercent = () => {
    const total = quizInfo.amount;
    let correctLength = 0;
    let inCorrectLength = 0;

    for (let i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i].correct) {
        correctLength++;
      }
    }

    for (let i = 0; i < userAnswers.length; i++) {
      if (!userAnswers[i].correct) {
        inCorrectLength++;
      }
    }

    const percent = ((correctLength - inCorrectLength / 3) / total) * 100;

    return <p className="badge bg-primary">{percent.toFixed(2)} %</p>;
  };

  const handleReset = () => {
    setQuestions([]);
    setUserAnswers([]);
  };

  return (
    <div className="result text-center mx-auto px-2 my-3">
      <div className="bg-light bg-gradient bg-opacity-75 d-flex justify-content-around pt-3 border border-light mx-auto text-dark">
        <h4>Name: {quizInfo.name}</h4>
        <h4>Overall Percentage: {renderPercent()}</h4>
      </div>

      <table className="table mx-auto table-dark table-striped table-hover table-bordered border border-light">
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
            <th>Correct</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => {
            const answers = userAnswers.find(
              (answer) => answer.question === question.question
            );
            const correct = answers?.answer === question.correct_answer;
            const hasAnswer = answers?.answer;
            return (
              <tr>
                <td>{question.question}</td>
                <td>{answers ? answers.answer : "-"}</td>
                <td>{question.correct_answer}</td>
                <td
                  className={
                    hasAnswer
                      ? correct
                        ? "text-success"
                        : "text-danger"
                      : "text-light"
                  }
                >
                  {hasAnswer ? correct.toString() : "-"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Link to={"/"} onClick={handleReset} className="btn btn-lg btn-primary">
        New Quiz
      </Link>
    </div>
  );
};

export default Result;
