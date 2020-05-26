import React from "react";
import renderer from "react-test-renderer";
import SearchBox from "./SearchBox";

it("expect to render SearchBox component", () => {
    const component = renderer.create(<SearchBox />);
    expect(component.toJSON()).toMatchSnapshot();
});