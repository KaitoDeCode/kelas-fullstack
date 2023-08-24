import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"

function App() {
  const course = 'Half Stack application development'
  const exercises = {
     exercises1 : 10,
     exercises2 : 7,
     exercises3 : 14,

  }
  return (
    <>
      <Header course={course}/>
      <Content exercises={exercises}/>
      <Total exercises={exercises}/>
    </>
  )
}

export default App
