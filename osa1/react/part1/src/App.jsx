function App() {
  const now = new Date()
  const a = 10
  const b = 20
  return (
    <>
      <h1>Hello World, it is {now.toString()}</h1>
      <p>{a}+{b}={a+b}</p>
    </>
  )
}

export default App
