import React from "react";
import { Link } from "react-scroll";

export default function Item({ children, to, onClick = () => "" }) {
  return (
    <Link to={to} spy={true} smooth={true} duration={500} onClick={onClick}>
      {children}
    </Link>
  );
}
