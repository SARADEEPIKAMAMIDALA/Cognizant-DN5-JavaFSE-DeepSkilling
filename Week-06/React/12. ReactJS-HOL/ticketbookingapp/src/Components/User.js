import React from "react";

function User() {

    return (

        <div>

            <h2>Welcome User</h2>

            <h3>Flight Details</h3>

            <table border="1" cellPadding="10">

                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Fare</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>AI101</td>
                        <td>Hyderabad</td>
                        <td>Delhi</td>
                        <td>₹5000</td>
                    </tr>

                    <tr>
                        <td>AI202</td>
                        <td>Chennai</td>
                        <td>Mumbai</td>
                        <td>₹6500</td>
                    </tr>

                    <tr>
                        <td>AI303</td>
                        <td>Bangalore</td>
                        <td>Kolkata</td>
                        <td>₹7000</td>
                    </tr>

                </tbody>

            </table>

            <h2 style={{color:"green"}}>

                Ticket Booking Available

            </h2>

            <button>Book Ticket</button>

        </div>

    );

}

export default User;