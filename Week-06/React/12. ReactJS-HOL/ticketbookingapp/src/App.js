import React, { useState } from "react";

import Guest from "./Components/Guest";
import User from "./Components/User";

function App() {

    const [loggedIn, setLoggedIn] = useState(false);

    return (

        <div align="center">

            <h1>Ticket Booking App</h1>

            {

                loggedIn ?

                <button onClick={() => setLoggedIn(false)}>
                    Logout
                </button>

                :

                <button onClick={() => setLoggedIn(true)}>
                    Login
                </button>

            }

            <hr />

            {

                loggedIn ?

                <User />

                :

                <Guest />

            }

        </div>

    );

}

export default App;