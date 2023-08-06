export interface AnswerObject {
  question: string;
  answer: string;
  correct?: boolean;
  correctAnswer: string;
}

export interface UserAnswersAction {
  type: "ADD_USER_ANSWER";
  userAnswers: AnswerObject[];
}

const userAnswersReducer = (
  userAnswers: AnswerObject,
  action: UserAnswersAction
) => {
  switch (action.type) {
    case "ADD_USER_ANSWER":
      return [...action.userAnswers, userAnswers];
  }
};

export default userAnswersReducer;
