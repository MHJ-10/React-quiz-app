import React ,{ createContext, useState } from "react";
import { QuestionState } from "../services/api";

export interface AnswerObject {
    question: string
    answer: string
    correct?: boolean 
    correctAnswer: string
}

interface QuizInfo {
    name: string
    amount: number
    category: number
}

interface IAppContext {
    quizInfo: QuizInfo
    setQuizInfo: React.Dispatch<React.SetStateAction<QuizInfo>> 
    userAnswers: AnswerObject[]
    setUserAnswers: React.Dispatch<React.SetStateAction<AnswerObject[]>>
    questions: QuestionState[]
    setQuestions: React.Dispatch<React.SetStateAction<QuestionState[]>>
}

interface IAppContextProps {
    children: React.ReactNode
}

export const AppContext = createContext<IAppContext>({
    quizInfo: {name:"", amount: 5, category: 9},
    setQuizInfo: () => {},
    userAnswers: [],
    setUserAnswers: () => {},
    questions: [],
    setQuestions: () => {}
})

export const StateContext: React.FC<IAppContextProps> = ({children}) => {
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
    const [questions, setQuestions] = useState<QuestionState[]>([])
    const [quizInfo, setQuizInfo] = useState<QuizInfo>({
        name: "",
        amount: 5,
        category: 9
    })

    return (
        <AppContext.Provider value={{quizInfo, setQuizInfo, userAnswers, setUserAnswers, questions, setQuestions}}>
            {children}
        </AppContext.Provider>
   );
}
    


