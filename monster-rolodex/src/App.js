import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

// Run with 'npm start'
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  // Fetch from the URL the response and converting to a JSON format then take the users and set our monsters to that array
  // componentDidMount is a LifeCycleMethod that calls whatever code is within when React renders the component in the DOM for the first time
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}

export default App;
