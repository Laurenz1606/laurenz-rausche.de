import React from "react";
import CodeEmbed from "../CodeEmbed";
import Container from "../Container";
import QandA from "../QandA";
import Content from "../../contents/About";

export default function About({ lang }) {
  return (
    <div className="bg-gray-dark shadow-2xl">
    <Container>
      <div className="font-medium space-y-5 py-12">
        <CodeEmbed>&gt; whoami (Q&A)</CodeEmbed>
        <p>{Content[lang].description}</p>
        <div className="space-y-5 text-white">
          {Content[lang].QandA.map((item, idx) => (
            <QandA
              lang={lang}
              question={item.question}
              answer={item.answer}
              key={idx}
            />
          ))}
        </div>
      </div>
    </Container></div>
  );
}
