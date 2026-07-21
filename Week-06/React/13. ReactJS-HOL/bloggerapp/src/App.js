import CourseDetails from "./Components/CourseDetails";
import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import "./App.css";

function App() {

    const show = true;

    if (show) {

        return (

            <div className="container">

                <div className="box">
                    <CourseDetails />
                </div>

                <div className="box">
                    <BookDetails />
                </div>

                <div className="box">
                    <BlogDetails />
                </div>

            </div>

        );

    }

    else {

        return <h2>No Data</h2>;

    }

}

export default App;