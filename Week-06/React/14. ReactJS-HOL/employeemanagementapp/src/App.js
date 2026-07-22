import React, { useState } from "react";
import EmployeeList from "./Components/EmployeeList";
import ThemeContext from "./ThemeContext";

function App() {

    const [theme, setTheme] = useState("light");

    const employees = [
        {
            id:1,
            name:"John",
            designation:"Developer"
        },
        {
            id:2,
            name:"Sara",
            designation:"Tester"
        },
        {
            id:3,
            name:"David",
            designation:"Manager"
        }
    ];

    return (

        <ThemeContext.Provider value={theme}>

            <div>

                <h1>Employee Management</h1>

                <button onClick={() => setTheme("light")}>
                    Light Theme
                </button>

                <button onClick={() => setTheme("dark")}>
                    Dark Theme
                </button>

                <EmployeeList employees={employees} />

            </div>

        </ThemeContext.Provider>

    );

}

export default App;