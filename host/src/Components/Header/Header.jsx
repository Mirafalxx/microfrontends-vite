import { NavLink } from "react-router-dom";
import Login from "cartRemoteApp/Login";
import { useLoggedIn } from "cartRemoteApp/cart";
import "./style.scss";

const Header = () => {
  const loggedIn = useLoggedIn();

  return (
    <div className="header__container">
      <div className="header">
        <NavLink to="/" className="app__link">
          Todos
        </NavLink>
        <NavLink to="/cards" className="app__link">
          Cards
        </NavLink>
        {loggedIn && (
          <NavLink className="app__link" to="/my-cart">
            Cart
          </NavLink>
        )}
        <div className="relative">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Header;
