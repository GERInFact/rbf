import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./MainPage";


let component;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: "",
        isPending: false
    };
    component = renderer.create(<MainPage {...mockProps}/>);
});

it("renders MainPage without crashing", () => {
    expect(component.toJSON()).toMatchSnapshot();
});

it("filters robots correct", () => {
   expect(component.getInstance().getFilteredRobots()).toEqual([]); 
});