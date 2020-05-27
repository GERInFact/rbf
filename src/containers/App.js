import React, { Fragment } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../Actions";
import MainPage from "../components/MainPage";

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
  render() {
    return <MainPage {...this.props}/>;
  }

}

//connect returns another function -> higher order function
export default connect(mapStateToProps, mapDispatchToProps)(App);
