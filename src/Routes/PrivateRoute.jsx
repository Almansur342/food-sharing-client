import { useContext } from "react";
import {Navigate,useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from "../Firebase/AuthProvider";

const PrivateRoute = ({children}) => {
  const {user,loader} = useContext(AuthContext);
  const location = useLocation();
  // console.log(location.pathname);

  if(loader){
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if(user){
    return children;
  }
  return <Navigate state={location.pathname} to='/login'></Navigate>
};


export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node
}