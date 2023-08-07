import { useContext, useEffect } from "react";
import QuestionService from "../services/api";
import QuestionsContext from "../contexts/questionsContext";

export const LoadQuestionHook = (amount: number, category: number) => {
  const { questionsDispatch } = useContext(QuestionsContext);

  useEffect(() => {
    loadQuestions();
  }, []);

  async function loadQuestions() {
    const questions = await QuestionService.getQuestions(amount, category);
    questionsDispatch({ type: "SET_QUESTIONS", questions });
  }
};
