import { useContext } from "react";
import quizContext from "../contexts/quizContext";

const useQuiz = () => useContext(quizContext);

export default useQuiz;
