import React from "react";
import "./footer.scss";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="footer">
      <p>Copyright © {date.getFullYear()} Qi Platform</p>
      <p className="author">Author by Mohamad Yusuf Adi Nata</p>
    </footer>
  );
};

export default Footer;
