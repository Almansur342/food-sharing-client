import { createBrowserRouter } from "react-router-dom";
import Root from '../Layout/Root'
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Available from "../Pages/Available/Available";
const router = createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/sixFood`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:'/available',
        element:<Available></Available>
      }
    ]

  },
]);

export default router;