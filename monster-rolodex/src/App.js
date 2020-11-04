import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

// Run with 'npm start'
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // Fetch from the URL the response and converting to a JSON format then take the users and set our monsters to that array
  // componentDidMount is a LifeCycleMethod that calls whatever code is within when React renders the component in the DOM for the first time
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }


  render() {
    // Same as saying const monsters = this.state.monsters;
    const { monsters, searchField } = this.state;
    // Filter out the monsters who's name does not include the user's search
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search for monster..."
          // OnChange of the search bar, get the value that user is typeing in and update the state's searchField
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
