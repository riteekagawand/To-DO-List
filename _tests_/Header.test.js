import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import Jest DOM matchers
import Header from "../components/Header";
import userEvent from "@testing-library/user-event";

const renderWithActiveRoute = (ui, { route = "/" } = {}) => {
  return render(React.cloneElement(ui, { activeRoute: route }));
};


describe("Header Component - Render Test", () => {
  it("renders all navigation links correctly", () => {
    render(<Header />);

    // Check if each link is present and rendered correctly
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
    expect(screen.getByText("Priority")).toBeInTheDocument();
  });
  it("navigates to correct routes when links are clicked", () => {
    const { rerender } = renderWithActiveRoute(<Header />, { route: "/" });

    // Click on the All link and check the active class
    userEvent.click(screen.getByText("All"));
    rerender(<Header activeRoute="/" />);
    expect(screen.getByText("All")).toHaveClass("active-link");

    // Click on the Active link and check the active class
    userEvent.click(screen.getByText("Active"));
    rerender(<Header activeRoute="/active" />);
    expect(screen.getByText("Active")).toHaveClass("active-link");

    // Click on the Completed link and check the active class
    userEvent.click(screen.getByText("Completed"));
    rerender(<Header activeRoute="/completed" />);
    expect(screen.getByText("Completed")).toHaveClass("active-link");

    // Click on the Priority link and check the active class
    userEvent.click(screen.getByText("Priority"));
    rerender(<Header activeRoute="/priority" />);
    expect(screen.getByText("Priority")).toHaveClass("active-link");
  });
});

