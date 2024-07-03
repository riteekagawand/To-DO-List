import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; // for the additional matchers
import Navbar from "../components/Navbar"; // adjust the path if necessary
import { MemoryRouter } from "react-router-dom"; // if using react-router-dom

describe("Navbar component", () => {
  it("renders the Navbar component", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const navbar = screen.getByTestId("navbar-component");
    expect(navbar).toBeInTheDocument();
  });

  it("contains the correct links", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole("link", { name: /to do list/i });
    const addTodoLink = screen.getByRole("link", { name: /add to do's/i });

    expect(homeLink).toHaveAttribute("href", "/");
    expect(addTodoLink).toHaveAttribute("href", "/addTodo");
  });

  it("Navbar links have the correct text", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const homeLinkText = screen.getByText("To Do List");
    const addTodoLinkText = screen.getByText("Add To Do's");

    expect(homeLinkText).toBeInTheDocument();
    expect(addTodoLinkText).toBeInTheDocument();
  });

  it("Navbar has the correct classes and attributes", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const navbar = screen.getByTestId("navbar-component");
    expect(navbar).toHaveClass("flex justify-between items-center bg-slate-800 px-8 py-3 rounded-3xl");

    const homeLink = screen.getByRole("link", { name: /to do list/i });
    const addTodoLink = screen.getByRole("link", { name: /add to do's/i });

    expect(homeLink).toHaveClass("text-white font-bold");
    expect(addTodoLink).toHaveClass("bg-gray-200 p-2 mr-6 rounded-2xl hover:bg-gray-400 border hover:border-white");
  });

});
