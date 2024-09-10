import { Route, Routes } from "react-router-dom";

import { Container } from "./App.style";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/Header";
import FruitListContainer from "./components/main/fruits/fruitsListSection/FruitListContainer";
import FruitDetail from "./components/main/fruits/fruitDetailSection/FruitDetail";

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
        <Route path={routesPath.fruits} element={<FruitListContainer />} />
        <Route path={routesPath.fruitsId} element={<FruitDetail />} />
      </Routes>
    </Container>
  );
}

export default App;
