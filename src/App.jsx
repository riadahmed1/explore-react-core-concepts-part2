import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {

  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = ()=>{
    alert('button 2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button><br />
      <button onClick={handleClick2}>Click2</button><br />
      <button onClick={() => {alert('third clicked')}}>Third</button><br/>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
