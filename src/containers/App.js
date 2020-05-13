import React, { Fragment } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import ErrorBoudry from "../components/ErrorBoundry";
import { setSearchField } from "../Actions";

import "./app.css";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
    };
  }

  render() {
    const filteredRobots = this.getFilteredRobots();
    const { onSearchChange } = this.props;

    return (
      <Fragment>
        <header className="header">
          <h1 className="header_title">RBF</h1>
          <SearchBox searchChange={onSearchChange} />
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
    const { searchField } = this.props;
    return this.state.robots.filter((r) =>
      r.name.toLowerCase().includes(searchField.toLowerCase())
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => this.setState({ robots: res }))
      .catch((err) => console.log(err.message));
  }
}

//connect returns another function -> higher order function
export default connect(mapStateToProps, mapDispatchToProps)(App);
