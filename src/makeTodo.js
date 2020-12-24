import React, { useEffect, useState } from "react";
import Todos from "./Todo";
function MakeTodo() {
  const [inputText, setinputText] = useState("");
  const [todoStore, settodoStore] = useState([]);
  const [todoId, settodoId] = useState(1);
  const [readOnly, setreadOnly] = useState(true);

  const confirmEdit = (id) => {
    setreadOnly(true);
    const tempStore = [...todoStore];
    const todoIndex = tempStore.findIndex((idx) => {
      return idx.id === id;
    });
    tempStore[todoIndex] = { ...tempStore[todoIndex], editMode: false };
    settodoStore(tempStore);
  };

  const toggleEditMode = (e) => {
    setreadOnly(false);
    const tempStore = [...todoStore];
    const todoIndex = tempStore.findIndex((idx) => {
      return idx.id === e;
    });
    tempStore[todoIndex] = { ...tempStore[todoIndex], editMode: true };
    settodoStore(tempStore);
  };

  const handleEditChange = (e) => {
    const tempStore = [...todoStore];
    const todoIndex = tempStore.findIndex((index) => {
      return index.id === e.id;
    });
    tempStore[todoIndex] = { ...tempStore[todoIndex], content: e.value };
    settodoStore(tempStore);
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setinputText(input);
  };

  const removeTodo = (getRemoveId) => {
    const tempStore = todoStore.filter((rem) => {
      return rem.id !== getRemoveId;
    });
    settodoStore(tempStore);
  };

  useEffect(() => {
    settodoId(1);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    settodoId((prevId) => {
      return prevId + 1;
    });
    const todo = { id: todoId, content: inputText, editMode: false };
    settodoStore([...todoStore, todo]);
    setinputText("");
  };
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <br />

        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <br />
      <Todos
        allTheStates={[todoStore, readOnly]}
        remove={removeTodo}
        editMode={toggleEditMode}
        handleEdit={handleEditChange}
        confEdit={confirmEdit}
      />
    </div>
  );
}

export default MakeTodo;