import { ReactNode, useReducer } from "react";
import userAnswersReducer from "../reducers/userAnswersReducer";
import userAnswersContext from "../contexts/userAnswersContext";

interface Props {
  children: ReactNode;
}

const UserAnswersProvider = ({ children }: Props) => {
  const [userAnswers, dispatch] = useReducer(userAnswersReducer, []);

  return (
    <userAnswersContext.Provider value={{ userAnswers, dispatch }}>
      {children}
    </userAnswersContext.Provider>
  );
};

export default UserAnswersProvider;
