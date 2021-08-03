import React from 'react'

export default function QandA({lang, question, answer}) {
  return (
    <div className="flex space-x-2">
      <div className="flex flex-col">
        <span className="">{lang === "EN" ? "Question:" : "Frage:"}</span>
        <span>{lang === "EN" ? "Answer:" : "Antwort:"}</span>
      </div>
      <div className="flex flex-col flex-1">
        <span className="">{question}</span>
        <span>{answer}</span>
      </div>
    </div>
  )
}
