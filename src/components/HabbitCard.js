import React from "react";
import { removeTask } from "../actions";
import { useDispatch } from "react-redux";

export default function HabbitCard(props) {
  // const [task, setTask] = React.useState("");
  const dispatch = useDispatch();
  const { task } = props;
  return (
    <div className="hab">
      <span class="view material-symbols-outlined" 
      // onClick={trackWeek(task)}
      >
        date_range
      </span>
      <span className="hab-name">{task}</span>
      <div className="hab-view">
        {/* <button>Track week</button> */}
        {/* <span class="material-symbols-outlined">check_circle</span> */}
        <span class="done material-symbols-outlined">check</span>
        <span class="not-done material-symbols-outlined">close</span>
      </div>
      <span
        class="delete material-symbols-outlined"
        onClick={() => dispatch(removeTask(task))}
      >
        delete
      </span>
    </div>
  );
}
