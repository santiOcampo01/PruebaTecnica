import React, { useState } from 'react'
import Draw from './draw'
import WordDisplay from './wordDisplay'
import LetterInput from './LetterInput'

const WORDS = ['javascript', 'react', 'astro', 'frontend', 'hangman', 'prueba tecnica']

export default function HangmanGame() {
  const [word, setWord] = useState(() => WORDS[Math.floor(Math.random() * WORDS.length)])
  const [guessed, setGuessed] = useState([' '])
  const [mistakes, setMistakes] = useState(0)
  const [letter, setLetter] = useState('')
  const maxMistakes = 6

  const handleGuess = l => {
    if (guessed.includes(l)) return
    setGuessed(prev => [...prev, l])
    if (!word.includes(l)) setMistakes(m => m + 1)
  }

  const submitGuess = () => {
    const l = letter.trim().toLowerCase()
    if (/^[a-zñ]$/.test(l)) handleGuess(l)
    setLetter('')
  }

  const resetGame = () => {
    setWord(WORDS[Math.floor(Math.random() * WORDS.length)])
    setGuessed([' '])
    setMistakes(0)
    setLetter('')
  }

  const isWin = word.split('').every(l => l === ' ' || guessed.includes(l))
  const isLose = mistakes >= maxMistakes

  let errClass = 'error-count'
  if (mistakes >= 4) errClass += ' danger'
  else if (mistakes >= 2) errClass += ' warn'

  return (
    <div className="card text-center">
      <Draw mistakes={mistakes} />
      <WordDisplay word={word} guessed={guessed} />

      {!isWin && !isLose && (
        <div className="mt-6 flex flex-col items-center">
          <LetterInput letter={letter} setLetter={setLetter} onEnter={submitGuess} />
          <div className="flex items-center space-x-4 mt-4">
            <button onClick={submitGuess} disabled={!letter} className="btn btn-green">
              Probar
            </button>
            <button onClick={resetGame} className="btn btn-blue">
              Reiniciar
            </button>
            <span className={errClass}>
              Errores: {mistakes}/{maxMistakes}
            </span>
          </div>
        </div>
      )}

      {isWin && (
        <div className="mt-6">
          <p className="text-green-600 text-xl animate-pop">Ganaste.</p>
          <button onClick={resetGame} className="btn btn-blue mt-4">
            Volver a jugar
          </button>
        </div>
      )}

      {isLose && (
        <div className="mt-6">
          <p className="text-red-600 text-xl">
            Perdiste. La palabra era <strong>{word}</strong>.
          </p>
          <button onClick={resetGame} className="btn btn-blue mt-4">
            Volver a jugar
          </button>
        </div>
      )}
    </div>
  )
}
