import {
  createBrowserRouter,
} from "react-router";
import  App from "../App";
import Login from "../pages/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

export default router;