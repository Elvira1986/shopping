// import svgr from "vite-plugin-svgr";
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/lululemon.svg?react";
import { UserContext } from "../../contexts/userContext";
import { CartContext } from "../../contexts/cartContext";
import CartIcon from "../../components/card-icon/cart-icon";
import CartDropdown from "../../components/card-dropdown/card-dropdown";
import { signOutUser } from "../../utils/firebase/firebase";
import "./navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link className="nav-link" to="/auth" onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
