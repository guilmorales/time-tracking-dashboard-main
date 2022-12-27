import React, {useState} from 'react'
import Aside from './components/Aside'
import Card from './components/Card.js'
import data from "./data"

function App() {
  const [time, setTime] = useState("daily")
  
  const cardElements = data.map(card =>
      <Card key={card.title} item={card} time={time}/>
  )
  
  function handleChange(event) {
      setTime(event.target.value)
  }
  
  return (
      <main>
          <Aside time={time} handleChange={handleChange}/>
          {cardElements}
      </main>
  )
}

export default App;
