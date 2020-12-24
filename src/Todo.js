import React from "react";
import deleteBefore from "./resources/delete_before.png";
import deleteAfter from "./resources/delete_after.png";
import done from "./resources/done.png";
import "animate.css";

import "./style.css";
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
              <div
                className="flex-container-todos animate__bounceIn"
                key={todo.id}
              >
                <input
                  className="singletodoInput"
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
                  <img
                    className="done"
                    src={done}
                    onClick={() => {
                      confirmEdit(todo.id);
                    }}
                    alt=""
                  />
                )}

                <img
                  className="removeTodoImg "
                  src={deleteBefore}
                  onMouseOver={(e) => (e.currentTarget.src = deleteAfter)}
                  onMouseOut={(e) => (e.currentTarget.src = deleteBefore)}
                  onClick={() => removeTodo(todo.id)}
                  alt=""
                />
              </div>
            );
          })}
        </>
      ) : (
        <h2> </h2>
      )}
    </div>
  );
}

export default Todos;
