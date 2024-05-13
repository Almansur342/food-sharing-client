import { createBrowserRouter } from "react-router-dom";
import Root from '../Layout/Root'
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Available from "../Pages/Available/Available";
import AddFood from "../Pages/AddFood/AddFood";
import PrivateRoute from "./PrivateRoute";
import Details from "../Pages/Details/Details";
import MyFood from "../Pages/MyFood/MyFood";
import Update from "../Pages/Update/Update";
import MyRequestedFood from "../Pages/MyRequestedFood/MyRequestedFood";
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
        element:<Available></Available>,
        
      },
      {
        path:'/addFood',
        element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/details/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/details/${params.id}`)
      },
      {
        path: '/myFood',
        element:<PrivateRoute><MyFood></MyFood></PrivateRoute>
      },
      {
        path: '/requestedFood',
        element:<PrivateRoute><MyRequestedFood></MyRequestedFood></PrivateRoute>
      }
    ]

  },
]);

export default router;