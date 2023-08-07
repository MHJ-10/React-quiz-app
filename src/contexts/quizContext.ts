import { createContext, Dispatch } from "react";
import { QuizAction, QuizInfo } from "../reducers/quizReducer";

interface QuizContextType {
  quizInfo: QuizInfo;
  dispatch: Dispatch<QuizAction>;
}

const quizContext = createContext<QuizContextType>({} as QuizContextType);

export default quizContext;
