import React from 'react'

import Card from '../card'

const Board = ({solved, dis, dimension, cards, flipped, handleClick}) => {
  return (
    <div className='board'>
      {cards.map(card => <Card
        key={card.id}
        id={card.id}
        type={card.type}
        width={dimension / 4.5}
        height={dimension / 4.5}
        front={card.front}
        flipped={flipped.includes(card.id)}
        handleClick={handleClick}
        dis={dis || solved.includes(card.id)}
        solved={solved.includes(card.id)}
      />)}
    </div>
  )
}

export default Board