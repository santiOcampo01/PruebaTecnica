import React, { useEffect, useRef } from 'react'

export default function LetterInput({ letter, setLetter, onEnter }) {
  const ref = useRef()
  useEffect(() => {
    ref.current.focus()
  }, [])
  const onKey = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      onEnter()
    }
  }
  return (
    <input
      ref={ref}
      value={letter}
      maxLength={1}
      onChange={e => setLetter(e.target.value)}
      onKeyDown={onKey}
      className="letter-input"
    />
  )
}
