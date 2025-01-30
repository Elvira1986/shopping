import React, { Fragment } from "react";
import "./footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Fragment>
      <footer>
        <p>Made with &#x2665; </p>
        <p>Copywrite &#169; {year}</p>
      </footer>
    </Fragment>
  );
};
export default Footer;
