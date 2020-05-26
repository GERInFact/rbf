import React from "react";
import renderer from "react-test-renderer";
import Card from "./Card";

it("expect to render Card component", () => {
  const component = renderer.create(<Card />);
  expect(component.toJSON()).toMatchSnapshot();
});
