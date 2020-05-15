import React, { Fragment } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import ErrorBoudry from "../components/ErrorBoundry";
import { setSearchField, requestRobots } from "../Actions";

import "./app.css";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const filteredRobots = this.getFilteredRobots();
    const { onSearchChange, isPending } = this.props;

    return (
      <Fragment>
        <header className="header">
          <h1 className="header_title">RBF</h1>
          <SearchBox searchChange={onSearchChange} />
        </header>
        {!isPending ? (
          <main className="main">
            <ErrorBoudry>
              <CardList users={filteredRobots} />
            </ErrorBoudry>
          </main>
        ) : (
          <h2>Loading...</h2>
        )}
      </Fragment>
    );
  }

  getFilteredRobots() {
    const { searchField, robots } = this.props;
    return robots.filter((r) =>
      r.name.toLowerCase().includes(searchField.toLowerCase())
    );
  }

  componentDidMount() {
    this.props.onRequestRobots();
  }
}

//connect returns another function -> higher order function
export default connect(mapStateToProps, mapDispatchToProps)(App);
