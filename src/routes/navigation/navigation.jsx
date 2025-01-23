// import svgr from "vite-plugin-svgr";
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/lululemon.svg?react";
import { UserContext } from "../../contexts/userContext";
import { CartContext } from "../../contexts/cartContext";
import CartIcon from "../../components/card-icon/cart-icon";
import CartDropdown from "../../components/card-dropdown/card-dropdown";
import { signOutUser } from "../../utils/firebase/firebase";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo style={{ width: "160px" }} />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink to="/auth" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
