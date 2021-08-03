import React from 'react'

export default function CodeEmbed({children}) {
  return (
    <pre className="p-3 overflow-auto block text-gray-dark">
      {children}
    </pre>
  )
}
