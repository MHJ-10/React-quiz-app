import { useEffect } from "react";
import QuestionService from "../services/api";


export const LoadQuestionHook = (amount: number, category: number, setQuestions: any) => {
  useEffect ( () => {
    loadQuestions()
    },[])
    async function loadQuestions () {
    const questions = await QuestionService.getQuestions(amount, category)
    setQuestions(questions)
  }
}
 

