import { Navigate, useRoutes } from "react-router-dom";
import Form from "./pages/form";
import NotFound from "./pages/not-found";
import Quiz from "./pages/quiz";
import Result from "./pages/result";
import QuestionsProvider from "./providers/questionsProvider";
import QuizProvider from "./providers/quizProvider";
import UserAnswersProvider from "./providers/userAnswersProvider";

const App = () => {
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
        <QuestionsProvider>{routes}</QuestionsProvider>
      </UserAnswersProvider>
    </QuizProvider>
  );
};

export default App;
