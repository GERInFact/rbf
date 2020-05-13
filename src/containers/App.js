import React, { Fragment } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import ErrorBoudry from "../components/ErrorBoundry";

import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  onSearchChange(filter) {
    this.setState({ searchField: filter });
  }

  render() {
    const filteredRobots = this.getFilteredRobots();

    return (
      <Fragment>
        <header className="header">
          <h1 className="header_title">RBF</h1>
          <SearchBox searchChange={(filter) => this.onSearchChange(filter)} />
        </header>
        <main className="main">
          <ErrorBoudry>
            <CardList users={filteredRobots} />
          </ErrorBoudry>
        </main>
      </Fragment>
    );
  }

  getFilteredRobots() {
    return this.state.robots.filter((r) =>
      r.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => this.setState({ robots: res }))
      .catch((err) => console.log(err.message));
  }
}

export default App;
