import React from "react";

class EventExamples extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            count: 0
        };

    }

    increment = () => {

        this.setState({
            count: this.state.count + 1
        });

    }

    decrement = () => {

        this.setState({
            count: this.state.count - 1
        });

    }

    sayHello = () => {

        alert("Hello! Have a Nice Day.");

    }

    handleIncrement = () => {

        this.increment();
        this.sayHello();

    }

    sayWelcome = (msg) => {

        alert(msg);

    }

    onPress = () => {

        alert("I was clicked");

    }

    render() {

        return (

            <div align="center">

                <h1>Counter : {this.state.count}</h1>

                <button onClick={this.handleIncrement}>
                    Increment
                </button>

                &nbsp;&nbsp;

                <button onClick={this.decrement}>
                    Decrement
                </button>

                <br /><br />

                <button onClick={() => this.sayWelcome("Welcome")}>
                    Say Welcome
                </button>

                <br /><br />

                <button onClick={this.onPress}>
                    Click Me
                </button>

            </div>

        );

    }

}

export default EventExamples;