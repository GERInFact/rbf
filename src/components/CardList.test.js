import React from "react";
import renderer from "react-test-renderer";
import CardList from "./CardList";

it("expect to render CardList compoenent", () => {
    const mockUsers = [
        {
            id: 1,
            name: "Robo",
            email: "robo@test.com"
        },
        {
            id: 2,
            name: "BoomBaam",
            email: "boombaam@test.com"
        }
    ];

    const component = renderer.create(<CardList users={mockUsers} />);
    expect(component.toJSON()).toMatchSnapshot();
});