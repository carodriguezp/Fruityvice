import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { HashRouter } from "react-router-dom";

describe("Header", () => {
  it("renders aplication title", () => {
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );

    const titleText = screen.getByText("Fruityvice");
    expect(titleText).toBeInTheDocument();
  });
});

describe("Navigation links", () => {
  it("renders links with corresponding href", () => {
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );

    const linkDiscover = screen.getByText("Discover Fruit");
    expect(linkDiscover).toHaveAttribute("href", "#/");

    const linkAllFruits = screen.getByText("All Fruits");
    expect(linkAllFruits).toHaveAttribute("href", "#/fruits");
  });
});
