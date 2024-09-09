import * as myService from "../../../../../services/api";
import { mockFruitListFromApi } from "../../../../mocks";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import FruitListContainer from "../FruitListContainer";
import { HashRouter } from "react-router-dom";
import FruitList from "../FruitList";

jest.mock("../../../../../services/api"); //route to be mocked

////////////FROM FILTER COMPONENT ////////////////

describe("Filter section calls API services", () => {
  describe("When input from user is received", () => {
    beforeEach(() => {
      jest
        .spyOn(myService, "getDataFromApi")
        .mockResolvedValue(mockFruitListFromApi);
    });

    it("should filter fruits by name correctly and displays items that match user's search", async () => {
      render(
        <HashRouter>
          <FruitList fruitsList={mockFruitListFromApi} />
        </HashRouter>
      );

      const userInput = "piña";

      const filteredFruits = mockFruitListFromApi.filter((fruit) => {
        return fruit.name.toLowerCase().includes(userInput.toLowerCase());
      });

      expect(filteredFruits).toEqual([
        {
          name: "Piña",
          id: 1,
          family: "Bromeliaceae",
          order: "Poales",
          genus: "Ananas",
          nutritions: {
            calories: 50,
            fat: 0.12,
            sugar: 9.85,
            carbohydrates: 13.12,
            protein: 0.54,
          },
        },
      ]);
    });

    it("should return all fruits if filter is an empty string", () => {
      render(
        <HashRouter>
          <FruitList fruitsList={mockFruitListFromApi} />
        </HashRouter>
      );

      const userInput = "";

      const filteredFruits = mockFruitListFromApi.filter((fruit) => {
        return fruit.name.toLowerCase().includes(userInput.toLowerCase());
      });

      expect(filteredFruits).toEqual(mockFruitListFromApi);
    });

    it("should return an empty list if the input value does not match any fruit", () => {
      render(
        <HashRouter>
          <FruitList fruitsList={mockFruitListFromApi} />
        </HashRouter>
      );

      const userInput = "e";

      const filteredFruits = mockFruitListFromApi.filter((fruit) => {
        return fruit.name.toLowerCase().includes(userInput.toLowerCase());
      });

      expect(filteredFruits).toEqual([]);
    });
  });
});

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
