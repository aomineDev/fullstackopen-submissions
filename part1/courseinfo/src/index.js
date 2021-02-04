import React from 'react'
import ReactDOM from 'react-dom'

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Header = ({ courseName }) => <h1>{courseName}</h1>

const Content = ({ courseParts }) => (
  <div>
    <Part part={courseParts[0]} />
    <Part part={courseParts[1]} />
    <Part part={courseParts[2]} />
  </div>
)

const Total = ({ courseParts }) => (
  <p>
    Number of exercises {courseParts[0].exercises + courseParts[1].exercises + courseParts[2].exercises}
  </p>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  

  return (
    <div>
      <Header courseName={course.name} />
      <Content courseParts={course.parts} />
      <Total courseParts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
