import React from "react";

function Todos(props) {
  const [todoStore, readOnly] = [...props.allTheStates];
  const removeTodo = props.remove;
  const toggleEditMode = props.editMode;
  const handleEditChange = props.handleEdit;
  const confirmEdit = props.confEdit;

  return (
    <div>
      {todoStore.length ? (
        <>
          {todoStore.map((todo) => {
            return (
              <div key={todo.id}>
                <input
                  onChange={(e) => {
                    handleEditChange({ value: e.target.value, id: todo.id });
                  }}
                  readOnly={readOnly}
                  onClick={() => {
                    toggleEditMode(todo.id);
                  }}
                  type="text"
                  value={todo.content}
                />
                {todo.editMode && (
                  <button
                    onClick={() => {
                      confirmEdit(todo.id);
                    }}
                  >
                    Confirm
                  </button>
                )}
                <button onClick={() => removeTodo(todo.id)}>Remove</button>
              </div>
            );
          })}
        </>
      ) : (
        <h2>Enter some Todos</h2>
      )}
    </div>
  );
}

export default Todos;
