import * as myService from "../../../../../services/api";
import { mockFruitListFromApi } from "../../../../mocks";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import FruitListContainer from "../FruitListContainer";

jest.mock("../../../../../services/api"); //route to be mocked

////////////FROM FRUIT LIST COMPONENT ////////////////

describe("FruitList section calls API services", () => {
  describe("when succesfull", () => {
    beforeEach(() => {
      jest
        .spyOn(myService, "getDataFromApi")
        .mockResolvedValue(mockFruitListFromApi);
    });

    it("renders FruitList section", async () => {
      render(<FruitListContainer />);

      const list = screen.getByTestId("list-of-fruits");
      expect(list).toBeInTheDocument();
    });
  });

  describe("when not succesfull", () => {
    beforeEach(() => {
      jest.spyOn(myService, "getDataFromApi").mockResolvedValue([]);
    });

    it("throws an error", async () => {
      render(<FruitListContainer />);

      const errorMessage = await screen.findByTestId("error-message");

      expect(errorMessage).toBeInTheDocument();
    });
  });
});
