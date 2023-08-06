import { useReducer } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import quizContext from "./contexts/quizContext";
import userAnswersContext from "./contexts/userAnswersContext";
import { StateContext } from "./hooks/stateContext";
import Form from "./pages/form";
import NotFound from "./pages/not-found";
import Quiz from "./pages/quiz";
import Result from "./pages/result";
import quizReducer from "./reducers/quizReducer";
import userAnswersReducer from "./reducers/userAnswersReducer";

const App = () => {
  const [quizInfo, quizDispatch] = useReducer(quizReducer, {});
  const [userAnswers, userAnswersDispatch] = useReducer(userAnswersReducer, []);
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
    <quizContext.Provider value={{ quizInfo, dispatch: quizDispatch }}>
      <userAnswersContext.Provider
        value={{ userAnswers, dispatch: userAnswersDispatch }}
      >
        <StateContext>{routes} </StateContext>
      </userAnswersContext.Provider>
    </quizContext.Provider>
  );
};

export default App;
