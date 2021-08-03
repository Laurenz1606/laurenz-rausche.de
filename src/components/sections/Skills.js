import React from "react";
import Container from "../Container";
import Contents from "../../contents/Skills";
import Languages from "../../images/Skills/languages.svg";
import Frameworks from "../../images/Skills/frameworks.svg";
import Databases from "../../images/Skills/databases.svg";
import Tools from "../../images/Skills/tools.svg";
import Skill from "../Skill";

export default function Skills({ lang }) {
  return (
    <div className="pt-12">
      <Container>
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-3xl font-semibold mb-6">
            {Contents[lang].heading}
          </h1>
        </div>
        <div className="space-y-16 pb-4">
          <Skill src={Languages} text={Contents[lang].skills[0]} />
          <Skill src={Frameworks} text={Contents[lang].skills[1]} />
          <Skill src={Databases} text={Contents[lang].skills[2]} />
          <Skill src={Tools} text={Contents[lang].skills[3]} />
        </div>
        <div className="text-xl pt-10">{Contents[lang].text}</div>
      </Container>
    </div>
  );
}
