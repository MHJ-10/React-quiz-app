export interface QuizInfo {
  name: string;
  amount: number;
  category: number;
}

export interface QuizAction {
  quizInfo: QuizInfo;
  type: "SET_NAME" | "SET_AMOUNT" | "SET_CATEGORY";
}

const quizReducer = (state: QuizInfo, action: QuizAction) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.quizInfo.name };
    case "SET_AMOUNT":
      return { ...state, amount: action.quizInfo.amount };
    case "SET_CATEGORY":
      return { ...state, category: action.quizInfo.category };
    default:
      return state;
  }
};

export default quizReducer;
