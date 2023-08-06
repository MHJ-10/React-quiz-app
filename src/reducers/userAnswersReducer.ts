export interface AnswerObject {
  question: string;
  answer: string;
  correct?: boolean;
  correctAnswer: string;
}

export interface UserAnswersAction {
  type: "ADD_USER_ANSWER";
  userAnswer: AnswerObject;
}

const userAnswersReducer = (
  userAnswers: AnswerObject[],
  action: UserAnswersAction
) => {
  switch (action.type) {
    case "ADD_USER_ANSWER":
      return [...userAnswers, action.userAnswer];
  }
};

export default userAnswersReducer;
