import React from "react";
import { connect } from "react-redux";
import {removeTask} from "../actions"

export function HabbitCard(props) {
  const {task} = props;
  return (
    <div className="hab">
      <span class="view material-symbols-outlined">date_range</span>
      <span className="hab-name">{task}</span>
      <div className="hab-view">
        {/* <button>Track week</button> */}
        {/* <span class="material-symbols-outlined">check_circle</span> */}
        <span class="done material-symbols-outlined">check</span>
        <span class="not-done material-symbols-outlined">close</span>
      </div>
      <span class="delete material-symbols-outlined">delete</span>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { removeTask })(HabbitCard);