// import svgr from "vite-plugin-svgr";

import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/lululemon.svg?react";
import "./navigation.scss";
// import { ReactComponent as Logo } from "../../assets/lululemon.svg";

const Navigation = () => {
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
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
