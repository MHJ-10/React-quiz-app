import { useContext } from "react";
import userAnswersContext from "../contexts/userAnswersContext";

const useUserAnswers = () => useContext(userAnswersContext);

export default useUserAnswers;
