import { Route, Routes } from "react-router-dom";

import { Container } from "./App.style";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/Header";
import FruitList from "./components/main/fruits/fruitsListSection/fruitList";

export const routesPath = {
  base: "/",
  fruits: "/fruits",
  fruitsId: "/fruits/:id",
};

function App() {
  return (
    <Container>
      <Header />

      <Routes>
        <Route
          path={routesPath.base}
          element={<div>RandomFruit component</div>}
        />
        <Route path={routesPath.fruits} element={<FruitList />} />
        <Route
          path={routesPath.fruitsId}
          element={<div>FruitDetail component</div>}
        />
      </Routes>
    </Container>
  );
}

export default App;
