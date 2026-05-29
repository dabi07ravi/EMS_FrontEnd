import {  createContext,
  useState,
    useEffect
} from 'react'
  

export const AuthContext =
    createContext()
  

    function AuthProvider({ children }) {

  // LOGGED IN USER
  const [loggedInUser, setLoggedInUser] =
    useState(() => {

      const storedUser =
        localStorage.getItem("loggedInUser")

      return storedUser
        ? JSON.parse(storedUser)
        : null

    })



  // SAVE USER TO LOCALSTORAGE
  useEffect(() => {

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(loggedInUser)
    )

  }, [loggedInUser])
        
          // LOGIN FUNCTION
      function login(user) {
    
    setLoggedInUser(user)

  }
        
        
          // LOGOUT FUNCTION
  function logout(){

    setLoggedInUser(null)

    localStorage.removeItem(
      "loggedInUser"
    )

  }
        
        

  return (

    <AuthContext.Provider
      value={{
        loggedInUser,
        login,
        logout
      }}
    >

      {children}

    </AuthContext.Provider>

  )

}

export default AuthProvider