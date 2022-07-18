import React from 'react';
import {Navigate} from "react-router-dom";
import { useUserAuth } from '../context/UserAuthContext'; 

const PrivateRouter = ({children}) => {
  let {user} = useUserAuth();
  console.log("private", user)

  if(!user) {
    return <Navigate to="/"/>
  }
  
  return children
}

export default PrivateRouter;