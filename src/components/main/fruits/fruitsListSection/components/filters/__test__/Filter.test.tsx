import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Filter from "../Filter";
import userEvent from "@testing-library/user-event";

describe("Filter", () => {
  const filterProps = {
    handleFilterFruit: jest.fn(),
  };

  const userValue = "Banana";

  describe("When user writes in input", () => {
    it("calls handleFilterFruit function to set value and set input value", () => {
      render(<Filter {...filterProps} />);

      const input = screen.getByTestId("input");
      userEvent.type(input, userValue); //.type simulates user typing--needs 2 arguments (an element and a text)

      expect(input).toHaveValue(userValue);
      expect(filterProps.handleFilterFruit).toHaveBeenCalledWith(userValue);
    });
  });
});
