import { NavLink } from "react-router-dom";
import "./style.scss";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header">
        <NavLink to="/" className="app__link">
          Home
        </NavLink>
        <NavLink to="/todos" className="app__link">
          Todos
        </NavLink>
        <NavLink to="/cards" className="app__link">
          Cards
        </NavLink>
        <NavLink to="/remote-page" className="app__link">
          Remote Page
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
