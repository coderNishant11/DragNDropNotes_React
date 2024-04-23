import { useState } from 'react'
import './App.css'
import Notes from './components/Notes'
import Input from './components/Input'



function App() {
  const [notes, setNotes]=useState(
  [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt esse laudantium sit eligendi.'
    },
    {
      id: 2,
      text:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium excepturi reiciendis nostrum.'
    }
  ])
  
  const updateNotes = (text) => {
    console.log(text)

    setNotes([{id:new Date().getSeconds(),text:text},...notes])
    
  }
  return (
    <div>
      <Input updateNotes={updateNotes}/>
      <Notes notes={notes} setNotes={ setNotes} />
    </div>
  )
}

export default App
