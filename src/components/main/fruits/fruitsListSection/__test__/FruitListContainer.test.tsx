import * as myService from "../../../../../services/api";
import { mockFruitListFromApi } from "../../../../mocks";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom";
import FruitListContainer from "../FruitListContainer";
import userEvent from "@testing-library/user-event";
import { HashRouter } from "react-router-dom";
import { act } from "react";
import { toBeInTheDocument } from "@testing-library/jest-dom/types/matchers";

jest.mock("../../../../../services/api"); //route to be mocked

//describe("", () => {})

////////////FROM FILTER COMPONENT ////////////////

describe("Filter section calls API services", () => {
  describe("When input from user is received", () => {
    describe("When succesfull finding data", () => {
      beforeEach(() => {
        jest
          .spyOn(myService, "getDataFromApi")
          .mockResolvedValue(mockFruitListFromApi);
      });

      it("displays items that match user's search", async () => {
        render(
          <HashRouter>
            <FruitListContainer />
          </HashRouter>
        );

        const userSearch = "higo";
        const input = screen.getByTestId("input");
        let foundFruit;

        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
          userEvent.type(input, userSearch); //.type simulates user typing--needs 2 arguments (an element and a text)
        });
        await waitFor(() => {
          foundFruit = screen.getByTestId(userSearch);
        });

        //screen.debug();
        expect(foundFruit).toBeInTheDocument();
        expect(
          screen.queryByTestId(mockFruitListFromApi[0].name.toLocaleLowerCase())
        ).not.toBeInTheDocument();
      });

      describe("When unsuccesfull finding data", () => {
        beforeEach(() => {
          jest
            .spyOn(myService, "getDataFromApi")
            .mockResolvedValue(mockFruitListFromApi);
        });

        it("displays an error", async () => {
          render(
            <HashRouter>
              <FruitListContainer />
            </HashRouter>
          );

          const userSearch = "test";
          const input = screen.getByTestId("input");
          const errorMessage = await screen.findByTestId("error-message");
          let foundFruit;

          // eslint-disable-next-line testing-library/no-unnecessary-act
          act(() => {
            userEvent.type(input, userSearch); //.type simulates user typing--needs 2 arguments (an element and a text)
          });
          await waitFor(() => {
            foundFruit = screen.queryByTestId(userSearch);
          });

          //screen.debug();
          expect(foundFruit).not.toBeInTheDocument();
          expect(
            screen.queryByTestId(
              mockFruitListFromApi[0].name.toLocaleLowerCase()
            )
          ).not.toBeInTheDocument();
          expect(errorMessage).toBeInTheDocument();
        });
      });
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
      render(
        <HashRouter>
          <FruitListContainer />
        </HashRouter>
      );

      const fruit0 = mockFruitListFromApi[0].name.toLowerCase();
      const fruit1 = mockFruitListFromApi[1].name.toLowerCase();

      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {
        screen.queryByTestId(fruit0);
      });

      expect(screen.getByTestId(fruit0)).toBeInTheDocument();
      expect(screen.getByTestId(fruit1)).toBeInTheDocument();
    });
  });

  describe("when not succesfull", () => {
    beforeEach(() => {
      jest.spyOn(myService, "getDataFromApi").mockResolvedValue([]);
    });

    it("displays an error", async () => {
      render(<FruitListContainer />);

      const errorMessage = await screen.findByTestId("error-message");

      expect(errorMessage).toBeInTheDocument();
    });
  });
});
