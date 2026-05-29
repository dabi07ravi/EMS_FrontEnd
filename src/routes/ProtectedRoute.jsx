import { useContext } from "react"

import { Navigate }
from "react-router-dom"

import { AuthContext }
from "../context/AuthContext"


function ProtectedRoute({
  children,
  role
}) {

  const { loggedInUser } =
    useContext(AuthContext)



  // NOT LOGGED IN
  if(!loggedInUser){

    return <Navigate to="/login" />

  }



  // WRONG ROLE
  if(loggedInUser.role !== role){

    return <Navigate to="/login" />

  }



  return children

}

export default ProtectedRoute