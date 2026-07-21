import React from "react";

function CourseDetails() {

    const courses = [
        {
            course: "Angular",
            date: "4/5/2021"
        },
        {
            course: "React",
            date: "6/3/2021"
        }
    ];

    return (

        <div>

            <h1>Course Details</h1>

            {

                courses.map((item, index) => (

                    <div key={index}>

                        <h2>{item.course}</h2>

                        <h4>{item.date}</h4>

                    </div>

                ))

            }

        </div>

    );

}

export default CourseDetails;