import { useContext } from "react";
import ThemeContext from "../ThemeContext";

function EmployeeCard({ employee }) {

    const theme = useContext(ThemeContext);

    return (

        <div>

            <h2>{employee.name}</h2>

            <h4>{employee.designation}</h4>

            <button className={theme}>
                View Details
            </button>

        </div>

    );

}

export default EmployeeCard;