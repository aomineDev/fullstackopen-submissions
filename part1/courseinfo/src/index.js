import React from 'react'
import ReactDOM from 'react-dom'

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Header = ({ course }) => <h1>{course}</h1>

const Content = props => (
  <div>
    <Part part={props.part1} />
    <Part part={props.part2} />
    <Part part={props.part3} />
  </div>
)

const Total = props => (
  <p>
    Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
  </p>
)

const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of react',
    exercises: 10
  }
  const part2 = {
    name: 'Ussing props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
