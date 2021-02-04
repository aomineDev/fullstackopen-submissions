import React from 'react'
import ReactDOM from 'react-dom'

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Header = ({ course }) => <h1>{course}</h1>

const Content = ({ parts }) => (
  <div>
    <Part part={parts[0]} />
    <Part part={parts[1]} />
    <Part part={parts[2]} />
  </div>
)

const Total = ({ parts }) => (
  <p>
    Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
  </p>
)

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of react',
      exercises: 10
    },
    {
      name: 'Ussing props to pass data',
      exercises: 7
    },
    {
      name: 'State of component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
