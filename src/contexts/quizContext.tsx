import { createContext, Dispatch, ReactNode, useReducer } from "react";
import quizReducer, { QuizAction, QuizInfo } from "../reducers/quizReducer";

interface QuizContextType {
  quizInfo: QuizInfo;
  dispatch: Dispatch<QuizAction>;
}
interface Children {
  children: ReactNode;
}

export const quizContext = createContext<QuizContextType>(
  {} as QuizContextType
);

const quizProvider = ({ children }: Children) => {
  const [quizInfo, dispatch] = useReducer(quizReducer, {});

  return (
    <quizContext.Provider value={{ quizInfo, dispatch }}>
      {children}
    </quizContext.Provider>
  );
};

export default quizProvider;
