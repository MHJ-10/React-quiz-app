import { createContext, Dispatch } from "react";
import { QuestionsAction } from "../reducers/questionsReducer";
import { QuestionState } from "../services/api";

interface QuestionsContextType {
  questions: QuestionState[];
  dispatch: Dispatch<QuestionsAction>;
}

const QuestionsContext = createContext<QuestionsContextType>(
  {} as QuestionsContextType
);

export default QuestionsContext;
