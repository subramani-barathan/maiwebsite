import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="container-fluid footer_section">
      <p>
        Copyright &copy; 2022 All Rights Reserved By{" "}
        <Link to="https://mainaturalfoods.com">Mai Natural Foods</Link>
      </p>
    </section>
  );
};

export default Footer;
