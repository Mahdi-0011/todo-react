import React, { useState } from "react"
import "./input.scss"



export default function Input() {
  const [inputData, setInputData] = useState("")
  const [List, setList] = useState<string[]>([]);

  const AddToList = (e: React.MouseEvent<HTMLButtonElement>) => {
    setList((prevList) => [...prevList, inputData]);
    setInputData("");
  }

  const removeFromList = (OneOfList: string) => {
    setList(List.filter((item) => item !== OneOfList));
  }

  const editList = (todo: string) => {
    setList(List.map((a) => (a === todo ? inputData : a)))
  }
  return (
    <div>
    <input 
    type="text"
    placeholder='write your list...'
    onChange={(e)=>{setInputData(e.target.value)}}
    value={inputData}
    />
    <button 
    onClick={AddToList}>
    Add!
    </button>
    <div>
    <p>you wrote:{List}</p>
    </div>
    <div>
      <ul>
      {List.map((item, index) => (
                    <li key={index}>{item}
                     <button onClick={() => removeFromList(item)}>delete</button>
                     <button onClick={() => editList(OneOfList)}>Edit</button>
                    </li>
                ))}
   
      </ul>
    </div>
    </div>
  )
}
