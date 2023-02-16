import { useState } from "react";
import HabbitCard from "./components/HabbitCard";
import Navbar from "./components/Navbar";

function App(props) {
  const { store } = props;
  console.log(props, store);
  return (
    <div className="App">
      <Navbar />
      <div className="habbits">
        {/* {tasks.length > 0 ? tasks.map(task => 
          <HabbitCard task={task}/>
        ) : ''} */}

        {/* <HabbitCard task={"alsdkf"} />
        <HabbitCard task={"dfkvm"} />
        <HabbitCard task={"djfern"} /> */}
      </div>
    </div>
  );
}

export default App;
