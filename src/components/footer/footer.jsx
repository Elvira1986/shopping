import React, { Fragment } from "react";
import "./footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Fragment>
      <footer>
        <p>Made with Love</p>
        <p>Copywrite &#169; {year}</p>
      </footer>
    </Fragment>
  );
};
export default Footer;
