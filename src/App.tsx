import { StateContext } from "./hooks/stateContext";
import { Navigate, useRoutes } from "react-router-dom";
import Form from "./pages/form";
import NotFound from "./pages/not-found";
import Quiz from "./pages/quiz";
import Result from "./pages/result";
import quizProvider from "./contexts/quizContext";

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
    <quizProvider>
      <StateContext>{routes} </StateContext>
    </quizProvider>
  );
};

export default App;
