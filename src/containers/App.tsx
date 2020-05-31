import React from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../Actions";
import MainPage from "../components/MainPage";

export interface IUser {
  id: number;
  name: string;
  email: string;
}


const mapStateToProps = (state: any) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>) : void => dispatch(setSearchField(event.currentTarget.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends React.Component {
  render() {
    return <MainPage {...this.props} />;
  }

}

//connect returns another function -> higher order function
export default connect(mapStateToProps, mapDispatchToProps)(App);
