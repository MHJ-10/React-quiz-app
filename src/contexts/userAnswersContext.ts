import { Dispatch, createContext } from "react";
import {
  AnswerObject,
  UserAnswersAction,
} from "../reducers/userAnswersReducer";

interface UserAnswersContextType {
  userAnswers: AnswerObject;
  dispatch: Dispatch<UserAnswersAction>;
}

const userAnswersContext = createContext<UserAnswersContextType>(
  {} as UserAnswersContextType
);

export default userAnswersContext;
