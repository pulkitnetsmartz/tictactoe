import React from 'react'
import './ScoreBoard.css'

const ScoreBoard = ({xScore, oScore, tie}) => {
  return (
    <div className='scoreboard'>
        <span className='x-score'> X - {xScore}</span>
        <span className='tie-score'> Tie - {tie}</span>
        <span className='y-score'> O - {oScore}</span>
    </div>
  )
}

export default ScoreBoard
