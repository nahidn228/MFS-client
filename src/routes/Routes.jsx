import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Dashboard from "../pages/Authentication/Dashboard";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";

import Home from "../pages/Home";
import CashOut from "../pages/CashOut";
import SendMoney from "../pages/SendMoney";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/sendMoney",
        element: <SendMoney />,
      },
      {
        path: "/cashOut",
        element: <CashOut />,
      },
    ],
  },
]);

export default router;
