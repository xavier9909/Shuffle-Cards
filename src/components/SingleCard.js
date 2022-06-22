import React from 'react'
import './SingleCard.css'
export const SingleCard = ({card,handleChoice, flipped,disabled }) => {
    const handleclick =()=>{
      if(!disabled){
            handleChoice(card)}
    }
  return (
    <div className='card'  > 
        
    <div className={flipped ? "flipped" : ""} >
      <img  className="front" src={card.src} alt="front card"  />

      <img onClick={handleclick}  className="back" src="/img/cover.png"  alt='back card'  />


    </div>
    
        </div>
  )
}
