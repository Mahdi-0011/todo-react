import  { useState } from "react";
import "./input.scss";

export default function Input() {
  const [inputData, setInputData] = useState("");
  const [List, setList] = useState<string[]>([]);
  const [editingItem, setEditingItem] = useState<string | null>(null);

  const AddOrUpdateItem = () => {
    if (!inputData.trim()) return;

    if (editingItem !== null) {
      setList((prevList) =>
        prevList.map((item) => (item === editingItem ? inputData : item))
      );
      setEditingItem(null);
    } else {
      setList((prevList) => [...prevList, inputData]);
    }

    setInputData("");
  };

  const removeFromList = (OneOfList: string) => {
    setList((prevList) => prevList.filter((item) => item !== OneOfList));
  };

  const editList = (todo: string) => {
    setInputData(todo);
    setEditingItem(todo);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="write your list..."
        onChange={(e) => setInputData(e.target.value)}
        value={inputData}
        className="input"
      />
      <button type="button" onClick={AddOrUpdateItem}
      className="btn"
      >
        {editingItem !== null ? "Update" : "Add!"}
      </button>
      
      <div className="card">
      <h3>My List!</h3>
        <ul>
          {List.map((item) => (
            <li key={item}>
              {item}
              <button type="button" onClick={() => removeFromList(item)}>
                Delete
              </button>
              <button type="button" onClick={() => editList(item)}>
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
