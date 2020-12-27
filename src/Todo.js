import React from "react";
import deleteBefore from "./resources/delete_before.png";
import deleteAfter from "./resources/delete_after.png";
import done_before from "./resources/done_before.png";
import done_after from "./resources/done_after.png";
import cancel_after from "./resources/cancel_after.png";
import cancel_before from "./resources/cancel_before.png";
import "animate.css";

import "./style.css";
function Todos(props) {
  const [todoStore, readOnly, valueChanged] = [...props.allTheStates];
  const removeTodo = props.remove;
  const toggleEditMode = props.editMode;
  const handleEditChange = props.handleEdit;
  const confirmEdit = props.confEdit;
  const restorePreviousValue = props.confPrevRest;

  return (
    <div>
      {todoStore.length ? (
        <>
          {todoStore.map((todo) => {
            return (
              <div
                className="flex-container-todos animate__bounceIn"
                key={todo.id}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    restorePreviousValue();
                  }
                }}
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
                  <>
                    <img
                      tabIndex="0"
                      className="done-desktop"
                      src={done_before}
                      onMouseOver={(e) => {
                        e.currentTarget.src = done_after;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.src = done_before;
                      }}
                      onClick={(e) => {
                        confirmEdit(todo.id);
                      }}
                      alt=""
                    />
                    <img
                      tabIndex="0"
                      className="done-mobile"
                      src={done_after}
                      onClick={() => {
                        confirmEdit(todo.id);
                      }}
                      alt=""
                    />
                    {valueChanged && (
                      <>
                        <img
                          tabIndex="1"
                          className="cancel-desktop"
                          src={cancel_before}
                          onMouseOver={(e) => {
                            e.currentTarget.src = cancel_after;
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.src = cancel_before;
                          }}
                          onClick={restorePreviousValue}
                          alt="cancel"
                        />
                        <img
                          tabIndex="1"
                          className="cancel-mobile"
                          src={cancel_after}
                          onClick={restorePreviousValue}
                          alt="cancel"
                        />
                      </>
                    )}
                  </>
                )}

                <img
                  className="removeTodoImg-desktop"
                  src={deleteBefore}
                  onMouseOver={(e) => (e.currentTarget.src = deleteAfter)}
                  onMouseOut={(e) => (e.currentTarget.src = deleteBefore)}
                  onClick={() => removeTodo(todo.id)}
                  alt=""
                />

                <img
                  className="removeTodoImg-mobile"
                  src={deleteAfter}
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
