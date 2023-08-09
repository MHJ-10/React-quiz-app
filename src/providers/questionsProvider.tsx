import { ReactNode, useReducer } from "react";
import QuestionsContext from "../contexts/questionsContext";
import QuestionsReducer from "../reducers/questionsReducer";

interface Props {
  children: ReactNode;
}

const QuestionsProvider = ({ children }: Props) => {
  const [questions, dispatch] = useReducer(QuestionsReducer, []);

  return (
    <QuestionsContext.Provider value={{ questions, dispatch }}>
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsProvider;
