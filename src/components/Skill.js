import React from "react";

export default function Skill({text, src}) {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-2 flex items-center">
        <div className="text-xl">{text}</div>
      </div>
      <div className="col-span-3">
        <img src={src} alt="" />
      </div>
    </div>
  );
}
