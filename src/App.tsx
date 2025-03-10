
import { useState } from 'react'
import './App.scss'
import Card from './components/card/card'
import Input from './components/input/input'

function App() {
  const[List, setList] = useState("");
  const AddToList = () => {
    setList(List+1)
  }

  return (
    <>
    <Input AddToList={AddToList}/>
    <Card />
    </>
  )
}

export default App
