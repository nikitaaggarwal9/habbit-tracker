import React from "react";

export default function Navbar() {
  return (
    <div className="nav">
      {true && (
        <div className="back">
          <span class="material-symbols-outlined">arrow_back</span>
        </div>
      )}
      <div className="heading-div">
        <div className="heading">Trackify@Habbit</div>
      </div>

      {true && (
        <div className="actions-div">
          <button className="add">+ Add Habbit</button>
        </div>
      )}
    </div>
  );
}
