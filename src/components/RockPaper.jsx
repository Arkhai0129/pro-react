import React, { useState } from 'react'
import './styles/style.css'
import paper from './assets/paper.png'
import rock from './assets/rock.png'
import scissors from './assets/scissors.png'

const RockPaper = () => {
  const data = ['Rock', 'Paper', 'Scissors']
  const [playerChoice, setPlayerChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)

  const handleClick = (choice) => {
    setPlayerChoice(choice)
    const newChoice = data[Math.floor(Math.random() * data.length)]
    setComputerChoice(newChoice)
  }

  const ChoiceImage = (choice) => {
    switch (choice) {
      case 'Rock':
        return <img src={rock} alt="rock" />
      case 'Paper':
        return <img src={paper} alt="paper" />
      case 'Scissors':
        return <img src={scissors} alt="scissors" />
      default:
        return null
    }
  }

  const Winner = () => {
    if (!playerChoice || !computerChoice) return null

    if (playerChoice === computerChoice) return "It's a tie!"
    if (
      (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
      (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
      (playerChoice === 'Paper' && computerChoice === 'Rock')
    ) {
      return 'Player wins!'
    }
    return 'Computer wins!'
  }

  return (
    <div className="main-container">
      <div className="display">
        <h1>{Winner()}</h1>
        <div className="mainDisplay">
          <div className="playerSide">
            {playerChoice && (
              <>
                <h2 className="playerChoiceText">Player: {playerChoice}</h2>
                <div className="playerChoiceImage">
                  {ChoiceImage(playerChoice)}
                </div>
              </>
            )}
          </div>
          <div className="computerSide">
            {computerChoice && (
              <>
                <h2 className="playerChoiceText">Computer: {computerChoice}</h2>
                <div className="playerChoiceImage">
                  {ChoiceImage(computerChoice)}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="button-container">
        {data.map((item, index) => (
          <button
            key={index}
            className="choice"
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default RockPaper
