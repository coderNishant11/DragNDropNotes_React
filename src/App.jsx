import { useState } from 'react'
import './App.css'
import Notes from './components/Notes'



function App() {
  const [notes, setNotes]=useState(
  [
    {
      id: 1,
      text: 'Check the description for my Frontend Interview'
    },
    {
      id: 2,
      text:' Like this video and Subsribe to Roadside programer'
    }
  ])
  

  return (
    <div>
      
      <Notes notes={notes} seNotes={ setNotes} />
    </div>
  )
}

export default App
