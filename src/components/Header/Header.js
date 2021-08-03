import { MenuIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import HeaderItem from "./HeaderItem";
import { Link } from "react-router-dom";
import Container from "../Container";

export default function Header({ children, bold, thin, items, lang, Content }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Container>
      <div className="justify-between p-3 text-lg hidden md:flex">
        <div className="select-none">
          <span className="font-medium">{bold}</span>
          <span className="font-light">{thin}</span>
        </div>
        <div className="space-x-8">
          {items.map((item, idx) => (
            <HeaderItem key={idx} to={item.to}>
              {item.name}
            </HeaderItem>
          ))}
          <Link to={Content[lang].toLang.to}>{Content[lang].toLang.name}</Link>
        </div>
      </div>
      <div className="flex md:hidden p-3 text-lg justify-between items-center">
        <div className="select-none">
          <span className="font-medium">{bold}</span>
          <span className="font-light">{thin}</span>
        </div>
        <button>
          <MenuIcon
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-6 h-6"
          />
        </button>
        {menuOpen ? (
          <div className="bg-white fixed inset-0 z-50 text-gray-dark flex flex-col justify-center items-center space-y-7">
            {items.map((item, idx) => (
              <HeaderItem
                key={idx}
                to={item.to}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {item.name}
              </HeaderItem>
            ))}
            <Link
              to={Content[lang].toLang.to}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {Content[lang].toLang.name}
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)}>Close</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
}
