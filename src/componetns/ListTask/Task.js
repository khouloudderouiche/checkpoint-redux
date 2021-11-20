import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {  complete, edit } from "../../Action/Action.js";

const Task = ({ el }) => {
  const dispatch = useDispatch();
  const [editTask, setEditTask] = useState(false);
  const handleEdit = () => {
    dispatch(edit(editDesc, el.id));
    setEditTask(!editTask);
  };
  const [editDesc, setEditDesc] = useState(el.content);
  return (
    <div>
      {!editTask ? (
        <input
          value={el.content}
          readOnly="readOnly"
          style={{ borderRadius: "4px", border: "2px solid red" }}
        ></input>
      ) : (
        <input
          value={editDesc}
          onChange={(e) => setEditDesc(e.target.value)}
          style={{ borderRadius: "4px", border: "2px solid red" }}
        ></input>
      )}
      <input
        type="checkbox"
        complete={el.check}
        onChange={() => dispatch(complete(el.id))}
      ></input>
      <button onClick={handleEdit} style={{ backgroundColor: "#f44336" }}>
        {!editTask ? "edit" : "save"}
      </button>
    </div>
  );
};

export default Task;

