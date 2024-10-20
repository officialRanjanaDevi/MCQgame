import React from 'react'
import './ScoreCard.css'
const ScoreCard = ({score}) => {
  return (
    <div className="container-box" >
       <h1 className='main-heading'>YOUR SCORE CARD</h1>
       <h1 className='sub-heading'>
         Correct answers: <span className='scorenum'>{score}</span>
       </h1>
       <h1 className='sub-heading'>
         Incorrect answers: <span className='scorenum'>{10-score}</span>
       </h1>
    </div>
  )
}

export default ScoreCard
