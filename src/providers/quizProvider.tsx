import { ReactNode, useReducer } from "react";
import quizContext from "../contexts/quizContext";
import quizReducer, { QuizInfo } from "../reducers/quizReducer";

interface Props {
  children: ReactNode;
}

const initialState: QuizInfo = {
  name: "",
  amount: 5,
  category: 21,
};

const QuizProvider = ({ children }: Props) => {
  const [quizInfo, dispatch] = useReducer(quizReducer, initialState);

  return (
    <quizContext.Provider value={{ quizInfo, dispatch }}>
      {children}
    </quizContext.Provider>
  );
};

export default QuizProvider;
