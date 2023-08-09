import { useRoutes } from "react-router-dom";
import QuestionsProvider from "./providers/questionsProvider";
import QuizProvider from "./providers/quizProvider";
import UserAnswersProvider from "./providers/userAnswersProvider";
import routes from "./routes";

const App = () => {
  const router = useRoutes(routes);

  return (
    <QuizProvider>
      <UserAnswersProvider>
        <QuestionsProvider>{router}</QuestionsProvider>
      </UserAnswersProvider>
    </QuizProvider>
  );
};

export default App;
