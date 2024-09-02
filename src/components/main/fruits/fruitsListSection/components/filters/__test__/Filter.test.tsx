//CASOS DEL TEST
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Filter from "../Filter";
import userEvent from "@testing-library/user-event";

//DEL FILTER
//USUARIO ESCRIBE EN EL INPUT Y SE RECOGE EL VALOR

//QUE NO SE VEA Y DE ERROR
//

//DEL CONTAINER:
//CUANDO ENCUENTRA FRUTA
//CUANDO NO ENCUENTRA FRUTA

//PONERLE TEST ID AL FORMCONTROL

describe("Filter", () => {
  const filterProps = {
    handleFilterFruit: jest.fn(),
  };

  const userValue = "Banana";

  describe("When user writes in imput", () => {
    it("calls handleFilterFruit function to set value and set imput value", () => {
      render(<Filter {...filterProps} />);

      const input = screen.getByTestId("input");
      userEvent.type(input, userValue); //.type simula que el usuario teclea--necesita 2 argumentos(un elemento y un text)

      expect(input).toHaveValue(userValue);
      expect(filterProps.handleFilterFruit).toHaveBeenCalledWith(userValue);

      //screen.debug();
    });
  });
});
