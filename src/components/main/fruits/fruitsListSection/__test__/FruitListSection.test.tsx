import * as myService from "../../../../../services/api";
import { mockFruitListFromApi } from "../../../../mocks";
import FruitList from "../FruitList";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

jest.mock("../../../../../services/api"); //route to be mocked

describe("FruitList section calls API services", () => {
  describe("when succesfull", () => {
    beforeEach(() => {
      jest
        .spyOn(myService, "getDataFromApi")
        .mockResolvedValue(mockFruitListFromApi);
    });

    it("renders FruitList section", async () => {
      render(<FruitList />);

      const list = screen.getByTestId("list-of-fruits");
      expect(list).toBeInTheDocument();
    });
  });

  describe("when not succesfull", () => {
    beforeEach(() => {
      jest.spyOn(myService, "getDataFromApi").mockResolvedValue([]);
    });

    it("throws an error", async () => {
      render(<FruitList />);

      const errorMessage = await screen.findByTestId("error-message");

      expect(errorMessage).toBeInTheDocument();
    });
  });
});
