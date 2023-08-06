import { StateContext } from "./hooks/stateContext";
import { Navigate, useRoutes } from "react-router-dom";
import Form from "./pages/form";
import NotFound from "./pages/not-found";
import Quiz from "./pages/quiz";
import Result from "./pages/result";
import { useReducer } from "react";
import quizReducer from "./reducers/quizReducer";
import quizContext from "./contexts/quizContext";

const App = () => {
  const [quizInfo, dispatch] = useReducer(quizReducer, {});
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
    <quizContext.Provider value={{ quizInfo, dispatch}}>
      <StateContext>{routes} </StateContext>
    </quizContext.Provider>
  );
};

export default App;
