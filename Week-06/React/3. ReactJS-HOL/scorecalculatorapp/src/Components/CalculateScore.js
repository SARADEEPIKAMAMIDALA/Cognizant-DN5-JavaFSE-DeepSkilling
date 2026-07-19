import '../Stylesheets/mystyle.css';

function CalculateScore(props) {

    const score = ((props.total / props.goal) * 100).toFixed(2);

    return (
        <div className="container">

            <h1>Student Details:</h1>

            <h2>
                <span className="blue">Name:</span>
                <span className="value"> {props.name}</span>
            </h2>

            <h2>
                <span className="red">School:</span>
                <span className="value"> {props.school}</span>
            </h2>

            <h2>
                <span className="purple">Total:</span>
                <span className="value"> {props.total} Marks</span>
            </h2>

            <h2>
                <span className="green">Score:</span>
                <span className="value"> {score}%</span>
            </h2>

        </div>
    );
}

export default CalculateScore;