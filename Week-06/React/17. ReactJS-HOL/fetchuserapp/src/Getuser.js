import React, { Component } from "react";

class Getuser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      firstName: "",
      image: "",
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.randomuser.me/");
    const data = await response.json();

    this.setState({
      title: data.results[0].name.title,
      firstName: data.results[0].name.first,
      image: data.results[0].picture.large,
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Random User Details</h2>

        <img src={this.state.image} alt="User" />

        <h3>
          {this.state.title} {this.state.firstName}
        </h3>
      </div>
    );
  }
}

export default Getuser;