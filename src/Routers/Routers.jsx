import { createBrowserRouter } from "react-router-dom"
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Layout/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
            path:"/",
            element: <Home />
        },
        {
            index:true,
            element: <Home />
        },
        {
          path: "/login",
          element: <Login />
        }
      ]
    },
  ]);

  export default router