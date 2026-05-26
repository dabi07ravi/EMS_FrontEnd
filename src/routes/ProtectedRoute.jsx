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

    return <Navigate to="/" />

  }



  // WRONG ROLE
  if(loggedInUser.role !== role){

    return <Navigate to="/" />

  }



  return children

}

export default ProtectedRoute