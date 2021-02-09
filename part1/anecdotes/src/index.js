import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

const AnecdoteWithMostVotes = ({ anecdotes, points }) => {
  const maxPoint = Math.max(...points)

  const maxPointIndex = points.findIndex(point => point === maxPoint)

  return (
    <>
      <p>{anecdotes[maxPointIndex]}</p>
      <p>has {points[maxPointIndex]} votes</p>
    </>
  )
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  function randomNote () {
    const random = Math.floor(Math.random() * anecdotes.length)

    setSelected(random)
  }

  function handleVotes () {
    const newPoints = [...points]

    newPoints[selected] += 1

    setPoints(newPoints)
  }

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p> has {points[selected]} votes</p>
      <Button text='vote' handleClick={handleVotes} />
      <Button text='next anectode' handleClick={randomNote} />
      <h2>Anecdote with most votes</h2>
      <AnecdoteWithMostVotes anecdotes={anecdotes} points={points} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
