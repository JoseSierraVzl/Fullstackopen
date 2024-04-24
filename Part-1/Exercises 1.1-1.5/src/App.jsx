const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10,
      },
      {
        name: 'Using props to pass data',
        exercise: 7,
      },
      {
        name: 'State of a component',
        exercise: 14,
      },
      
    ],
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ course: {name} }) => {
  return (
    <h1>{name}</h1>
  )
}

const Content = ({ parts }) => {
  const listParts = parts.map((part, index) =>
    <Part name={part.name} exercise={part.exercise} key={index} />
  );

  return (
    <div>
      {listParts}
    </div>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((a, b) => a + b.exercise, 0);

  return (
    <p>Number of exercises {total}</p>
  )
}

const Part = ({ name, exercise }) => {
  return (
    <div>
      <p>{name} {exercise}</p>
    </div>
  )
}

export default App