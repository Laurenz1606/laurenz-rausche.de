import React from "react";
import Header from "../Header/Header";
import Content from "../../contents/Main";
import { Link as Scroller } from "react-scroll";
import { Typing } from "typing-effect-reactjs";
import Container from "../Container";
import { ChevronDownIcon } from "@heroicons/react/outline";

export default function Main({ lang }) {
  return (
    <div
      className="background max-h-screen bg-no-repeat flex flex-col text-white"
      style={{ aspectRatio: "16/9" }}
    >
      <Header bold="Laurenz" thin="Rausche" items={Content[lang].header} lang={lang} Content={Content} />
      <div className="flex-1 flex justify-center items-center flex-col text-xl md:text-3xl text-center">
        <Container>
          <Typing
            cursorColor="#FFFFFF"
            typeSpeed={120}
            deleteSpeed={130}
            disableBlinkingOnEnd={1}
            text={[
              Content[lang].typewriter.text + Content[lang].typewriter.frontend,
              Content[lang].typewriter.text + Content[lang].typewriter.backend,
              Content[lang].typewriter.text +
                Content[lang].typewriter.fullstack,
            ]}
            smartBackspace
          />
        </Container>
      </div>
      <div className="flex flex-col justify-center items-center pb-5">
        <Scroller spy={true} smooth={true} duration={500} to="about">
          <div className="flex flex-col justify-center items-center">
            <div className="text-base md:text-2xl pb-1">
              {Content[lang].about}
            </div>
            <ChevronDownIcon className="h-10 w-10 md:h-16 md:w-16 cta" />
          </div>
        </Scroller>
      </div>
    </div>
  );
}
