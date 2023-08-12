import { Link } from "react-router-dom";
import Input from "../components/Input";
import Select from "../components/Select";
import useQuiz from "../hooks/useQuiz";

const Form = () => {
  const { quizInfo, dispatch } = useQuiz();

  const enabled: boolean =
    !!quizInfo.name &&
    !!quizInfo.amount &&
    !!quizInfo.category &&
    quizInfo.amount <= 20 &&
    quizInfo.amount >= 5;

  return (
    <div className="form mx-auto px-2">
      <form
        autoComplete="off"
        className="container border border-2 border-danger rounded-5 my-5 bg-dark bg-gradient"
      >
        <h1 className="text-center">
          <span className="badge bg-danger bg-gradient bg-opacity-50 text-warning mt-1 p-2">
            Quiz Form
          </span>
        </h1>

        <Input
          label="Name"
          type="text"
          width={50}
          onChange={(e) =>
            dispatch({
              type: "SET_NAME",
              quizInfo: { ...quizInfo, name: e.currentTarget.value },
            })
          }
        />

        <Select
          label="Category"
          onChange={(e) =>
            dispatch({
              type: "SET_CATEGORY",
              quizInfo: {
                ...quizInfo,
                category: parseInt(e.currentTarget.value),
              },
            })
          }
          defaultValue={9}
        />

        <Input
          label="Number of Questions"
          type="number"
          width={25}
          defaultValue={5}
          min={5}
          max={20}
          onChange={(e) =>
            dispatch({
              type: "SET_AMOUNT",
              quizInfo: {
                ...quizInfo,
                amount: parseInt(e.currentTarget.value),
              },
            })
          }
        />

        <div className="text-center">
          <button
            disabled={!enabled}
            className="btn btn-warning border border-2 border-danger my-3"
          >
            <Link className="text-dark text-decoration-none" to={"/quiz"}>
              Start
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
