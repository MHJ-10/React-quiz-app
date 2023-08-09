import { useReducer } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import QuestionsContext from "./contexts/questionsContext";
import Form from "./pages/form";
import NotFound from "./pages/not-found";
import Quiz from "./pages/quiz";
import Result from "./pages/result";
import QuizProvider from "./providers/quizProvider";
import QuestionsReducer from "./reducers/questionsReducer";
import UserAnswersProvider from "./providers/userAnswersProvider";
const App = () => {
  const [questions, questionsDispatch] = useReducer(QuestionsReducer, []);
  const routes = useRoutes([
    {
      path: "/",
      element: <Form />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    },
    {
      path: "/result",
      element: <Result />,
    },
    {
      path: "/not-found",
      element: <NotFound />,
    },
    {
      path: "*",
      element: <Navigate to="/not-found" replace />,
    },
  ]);

  return (
    <QuizProvider>
      <UserAnswersProvider>
        <QuestionsContext.Provider value={{ questions, questionsDispatch }}>
          {routes}
        </QuestionsContext.Provider>
      </UserAnswersProvider>
    </QuizProvider>
  );
};

export default App;
