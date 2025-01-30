const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
{/*const Content = (props) => {
  return (
    <{props.part1} {props.exercises1} />
    <{props.part2} {props.exercises2} />
    <{props.part3} {props.exercises3} />
  )
}*/}
const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      {/*<Content part={part1} />*/}
      <Total exercises1={exercises1}/>
    </div>
  )
}

export default App
