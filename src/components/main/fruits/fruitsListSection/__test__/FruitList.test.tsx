import { mockFruitListFromApi } from "../../../../mocks";
import FruitList from "../FruitList";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { HashRouter } from "react-router-dom";

describe("FruitList section", () => {
  describe("when data is not empty", () => {
    it("renders FruitList section", async () => {
      render(
        <HashRouter>
          <FruitList fruitsList={mockFruitListFromApi} />
        </HashRouter>
      );

      const list = screen.getByTestId("list-of-fruits");
      expect(list).toBeInTheDocument();
    });
  });

  describe("when data is empty", () => {
    it("throws an error", async () => {
      render(<FruitList fruitsList={[]} />);

      const errorMessage = await screen.findByTestId("error-message");

      expect(errorMessage).toBeInTheDocument();
    });
  });
});
