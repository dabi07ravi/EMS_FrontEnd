import {
  createContext,
  useState,
  useEffect
} from "react"


// CREATE CONTEXT
export const EmployeeContext = createContext()


// PROVIDER COMPONENT
function EmployeeProvider({ children }) {

  // EMPLOYEE STATE
  const [employees, setEmployees] =
    useState(() => {

      const storedEmployees =
        localStorage.getItem("employees")

      return storedEmployees
        ? JSON.parse(storedEmployees)
        : [
            {
              id: 1,
              name: "Ravi",
              email: "ravi@gmail.com",
              department: "Frontend"
            }
          ]

    })



  // SAVE TO LOCALSTORAGE
  useEffect(() => {

    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    )

  }, [employees])



  return (

    <EmployeeContext.Provider
      value={{
        employees,
        setEmployees
      }}
    >

      {children}

    </EmployeeContext.Provider>

  )

}

export default EmployeeProvider