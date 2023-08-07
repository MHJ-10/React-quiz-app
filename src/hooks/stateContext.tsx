import React, { createContext, useState } from "react";
import { QuestionState } from "../services/api";

interface IAppContext {
  questions: QuestionState[];
  setQuestions: React.Dispatch<React.SetStateAction<QuestionState[]>>;
}

interface IAppContextProps {
  children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({
  questions: [],
  setQuestions: () => {},
});

export const StateContext: React.FC<IAppContextProps> = ({ children }) => {
  const [questions, setQuestions] = useState<QuestionState[]>([]);

  return (
    <AppContext.Provider value={{ questions, setQuestions }}>
      {children}
    </AppContext.Provider>
  );
};
