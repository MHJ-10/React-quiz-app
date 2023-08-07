import { QuestionState } from "../services/api";

export interface QuestionsAction {
  type: "SET_QUESTIONS";
  questions: QuestionState[];
}

const QuestionsReducer = (
  questions: QuestionState[],
  action: QuestionsAction
) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return action.questions;
  }
};

export default QuestionsReducer;
