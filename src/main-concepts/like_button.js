const root = ReactDOM.createRoot(document.getElementById('root'));

function Clock() {
  const [date, setDate] = React.useState(new Date());

  function tick() {
    setDate(new Date());
  }

  // setInterval(tick, 1000)

  return (
    <div>
      <h1>Hello, world</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  )
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.')
  }

  return (
    <form onSubmit={handleSubmit} >
      <button type="submit" >Submit</button>
    </form>
  )
}

function Toggle() {
  const [isToggleOn, setIsToggleOn] = React.useState('OFF')
  function handleClick() {
    setIsToggleOn(!isToggleOn)
  }
  return (
    <button onClick={handleClick} >
      {isToggleOn ? 'ON' : 'OFF'}
    </button>
  )
}

function App() {
  return (
    <div>
      <Toggle />
    </div>
  )
}

root.render(<App />)