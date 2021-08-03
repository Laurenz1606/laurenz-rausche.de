import React from 'react'
import { ChevronUpIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";

export default function ToTop() {
  return (
    <Link to="main" spy={true} smooth={true} duration={500}>
      <div className="fixed bottom-10 right-10 flex justify-center items-center bg-gray text-white p-1 rounded-full shadow-lg hover:bg-opacity-90">
        <ChevronUpIcon className="w-9 h-9" />
      </div>
    </Link>
  )
}
