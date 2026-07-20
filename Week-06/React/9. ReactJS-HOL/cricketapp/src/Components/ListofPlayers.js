import React from "react";

function ListofPlayers() {

    const players = [

        { name: "Virat", score: 95 },
        { name: "Rohit", score: 82 },
        { name: "Gill", score: 76 },
        { name: "Rahul", score: 68 },
        { name: "Hardik", score: 90 },
        { name: "Pant", score: 64 },
        { name: "Jadeja", score: 72 },
        { name: "Ashwin", score: 58 },
        { name: "Shami", score: 45 },
        { name: "Bumrah", score: 88 },
        { name: "Siraj", score: 61 }

    ];

    const lowScore = players.filter(player => player.score < 70);

    return (

        <div>

            <h2>List of Players</h2>

            <table border="1" cellPadding="8">

                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Score</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        players.map((player, index) => (

                            <tr key={index}>
                                <td>{player.name}</td>
                                <td>{player.score}</td>
                            </tr>

                        ))
                    }

                </tbody>

            </table>

            <br />

            <h2>Players with Score Below 70</h2>

            <ul>

                {
                    lowScore.map((player, index) => (

                        <li key={index}>
                            {player.name} - {player.score}
                        </li>

                    ))
                }

            </ul>

        </div>

    );

}

export default ListofPlayers;