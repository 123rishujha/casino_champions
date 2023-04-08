import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
const Score = () => {
    const { width, height } = useWindowSize()
  return (
    <div>
      <h1>Score</h1>
      <Confetti
      width={width}
      height={height}
      numberOfPieces={500}
     
    />
    </div>
  )
}

export default Score
