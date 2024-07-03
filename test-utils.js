// test-utils.js
import React from "react";
import { render } from "@testing-library/react";
import MockLink from "./MockLink";

const renderWithMockLink = (ui) => {
  return render(
    <MockLink.Provider value={MockLink}>{ui}</MockLink.Provider>
  );
};

export { renderWithMockLink };
