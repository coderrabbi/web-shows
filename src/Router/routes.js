import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Main from "../components/Layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{ path: "/", element: <Home /> }],
  },
]);
