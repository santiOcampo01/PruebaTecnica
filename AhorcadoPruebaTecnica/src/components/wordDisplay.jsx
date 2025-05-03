export default function WordDisplay({ word, guessed }) {
  return (
    <div className="word-box">
      {word.split('').map((l, i) =>
        l === ' ' ? (
          <span key={i} className="w-4" />
        ) : (
          <span key={i} className={`placeholder ${guessed.includes(l) ? 'revealed' : ''}`}>
            {guessed.includes(l) ? l.toUpperCase() : ''}
          </span>
        ),
      )}
    </div>
  )
}
