import React from 'react'
import './SingleCard.css'

const SingleCard = ({card,handleChoice,flipped}) => {
    const handleClick=()=>{
        handleChoice(card)
    }
  return (
    <div className="card" >
            <div className={flipped?"flipped":""}>
              <img className="front" src={card.src} alt=''/>
              <img className="back" src='/assets/cover.png'  onClick={handleClick }alt=''/>
            </div>
    </div>
  )
}

export default SingleCard
