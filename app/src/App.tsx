import React from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = React.useState<string[]>([]);
  const [text, setText] = React.useState<string>("");
  React.useEffect(() => {
    axios
      .get("http://localhost:8080/tasks")
      .then((data) => {
        // console.log(data);
        // @ts-ignore
        setTasks(data.data.tasks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const createTask = () => {
    axios
      .post("http://localhost:8080/tasks", {
        task: text,
      })
      .then((data) => {
        // console.log(data);
        // @ts-ignore
        setTasks(data.data.tasks);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        <input onChange={(e) => setText(e.target.value)} value={text} />
        <button onClick={createTask}>Create task</button>
      </div>
      {tasks.map((task, index) => {
        return <div key={index}>{task}</div>;
      })}
    </div>
  );
}

export default App;
