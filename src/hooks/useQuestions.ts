import { useContext } from "react";
import QuestionsContext from "../contexts/questionsContext";

const useQuestions = () => useContext(QuestionsContext);

export default useQuestions;
