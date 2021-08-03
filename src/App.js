import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Element } from "react-scroll";
import Main from "./components/sections/Main";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import ToTop from "./components/ToTop";

function App() {
  let location = useLocation();
  const [toTop, setToTop] = useState(false);
  const [lang, setLang] = useState(
    window.location.pathname.replace("/", "").toUpperCase()
  );

  useEffect(() => {
    setLang(window.location.pathname.replace("/", "").toUpperCase());
  }, [location]);

  window.addEventListener("scroll", () => {
    setToTop(document.getElementById("main").offsetHeight < getYPosition() + 1);
  });

  function getYPosition() {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    return top;
  }

  return (
    <>
      <Element name="main" id="main" className="z-20">
        <Main lang={lang} />
      </Element>
      <div className="text-gray-dark">
        <Element name="about">
          <About lang={lang} />
        </Element>
        <Element name="skills">
          <Skills lang={lang} />
        </Element>
        <Element name="projects">
          <Projects lang={lang} />
        </Element>
        <Element name="contact">
          contact
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Element>
      </div>
      {toTop ? <ToTop /> : ""}
    </>
  );
}

export default App;
