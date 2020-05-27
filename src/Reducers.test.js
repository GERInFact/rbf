import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from "./Constants";

import * as reducers from "./Reducers";

describe("searchRobots", () => {
  it("should return the initial state", () => {
    expect(reducers.searchRobots()).toEqual({ searchField: "" });
  });

  it("should handle CHANGE_SEARCH_FIELD", () => {
    expect(
      reducers.searchRobots(
        { searchField: "" },
        {
          type: CHANGE_SEARCH_FIELD,
          payload: "abc",
        }
      )
    ).toEqual({ searchField: "abc" });
  });
});

describe("requestRobots", () => {
  const initialRobotsState = {
    isPending: false,
    error: "",
    robots: [],
  };

  it("should return the inital state", () => {
    expect(reducers.requestRobots()).toEqual(initialRobotsState);
  });

  it("should handle REQUEST_ROBOTS_PENDING action", () => {
    expect(
      reducers.requestRobots(initialRobotsState, {
        type: REQUEST_ROBOTS_PENDING,
        payload: {
          isPending: true,
        },
      })
    ).toEqual({
      robots: [],
      error: "",
      isPending: true,
    });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS action", () => {
    expect(
      reducers.requestRobots(initialRobotsState, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 1337,
          },
        ],
      })
    ).toEqual({
      robots: [{ id: 1337 }],
      error: "",
      isPending: false,
    });
  });
});
