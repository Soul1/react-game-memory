import React, {useState, useEffect} from 'react'

import Board from './components/board'

import initDeck from './utils/deck'

function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)
  const [solved, setSolved] = useState([])
  const [dis, setDis] = useState(false)

  const handleClick = (id) => {
    setDis(true)
    if (flipped.length === 0) {
      setFlipped([id])
      setDis(false)
    } else {
      if (sameCardClicked(flipped, id)) return
      setFlipped([flipped[0], id])
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id])
        resetCards()
      } else {
       setTimeout(resetCards, 1500)
      }
    }
  }

  const resetCards = () => {
    setFlipped([])
    setDis(false)
  }

  const sameCardClicked = (id) => flipped.includes(id)

  const isMatch = (id) => {
    const clickedCard = cards.find(card => card.id === id)
    const flippedCard = cards.find(card => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }

  const resizeBoard = () => {
    setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ))
  }

  useEffect(() => {
    resizeBoard()
    setCards(initDeck())
  }, [])

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard)
    return () => window.removeEventListener('resize', resizeListener)
  }, [])

  return (
    <div className='app'>
      <Board solved={solved}
             dis={dis}
             dimension={dimension}
             cards={cards}
             flipped={flipped}
             handleClick={handleClick}/>
    </div>
  )
}

export default App
