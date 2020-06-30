import React from 'react'
import cn from 'classnames'

import back from '../../assets/back.svg'

import './style.scss'

const Card = ({solved, dis, id, flipped,  width, height, front, handleClick, type}) => {

  return (
    <div className={cn('flip-container', {'flipped': flipped})}
         style={{width, height}}
         onClick={() => dis ? null : handleClick(id)}>

      <div className='flipper'>

        <img className={cn({'front': flipped}, {'back': !flipped})}
             style={{width, height}}
             src={flipped || solved ? front : back} alt={`card ${type}`}/>

      </div>

    </div>
  )
}

export default Card