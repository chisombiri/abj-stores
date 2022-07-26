import React from "react";
import "./footer.css";

const Footer = ({ theme }) => {
  return (
    <footer className="--flex-center" data-theme={theme}>
      <p>Chisombiri &copy; 2022</p>
    </footer>
  );
};

export default Footer;
