import { Navigate } from "react-router-dom";
import Form from "./pages/form";
import NotFound from "./pages/not-found";
import Quiz from "./pages/quiz";
import Result from "./pages/result";

const routes = [
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
];

export default routes;
