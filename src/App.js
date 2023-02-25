// import { useState } from "react";
import { useSelector } from "react-redux";
import HabbitCard from "./components/HabbitCard";
import Navbar from "./components/Navbar";

function App(props) {
  // const { tasks } = props.state;
  const tasks = useSelector(state => state.tasks);
  console.log(tasks);
  return (
    <div className="App">
      <Navbar />
      <div className="habbits">
        {tasks.length > 0 ? tasks.map(task => 
          <HabbitCard task={task}/>
        ) : ''}

        {/* <HabbitCard task={"alsdkf"} />
        <HabbitCard task={"dfkvm"} />
        <HabbitCard task={"djfern"} /> */}
      </div>
    </div>
  );
}

export default App;
