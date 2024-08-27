import { Link } from "react-router-dom";
import { HeaderStyled } from "../../App.style";
import { routesPath } from "../../App";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-inverse">
        <HeaderStyled className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <h1 className="navbar-brand">Fruityvice</h1>
          </div>
          <div className="collapse navbar-collapse header-styled" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active">
                <Link to={routesPath.base}>Discover Fruit</Link>
              </li>
              <li className="active">
                <Link to={routesPath.fruits}>All Fruits</Link>
              </li>
            </ul>
          </div>
        </HeaderStyled>
      </nav>
    </header>
  );
}
