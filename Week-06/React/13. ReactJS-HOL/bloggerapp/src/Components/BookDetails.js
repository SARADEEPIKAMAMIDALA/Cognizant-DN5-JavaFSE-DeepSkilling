import React from "react";

function BookDetails() {

    const books = [
        {
            name: "Master React",
            price: 670
        },
        {
            name: "Deep Dive into Angular 11",
            price: 800
        },
        {
            name: "Mongo Essentials",
            price: 450
        }
    ];

    return (

        <div>

            <h1>Book Details</h1>

            {

                books.map((book, index) => (

                    <div key={index}>

                        <h3>{book.name}</h3>

                        <h4>{book.price}</h4>

                    </div>

                ))

            }

        </div>

    );

}

export default BookDetails;