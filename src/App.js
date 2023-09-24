import "./App.css";
import ToDoBlock from "./Components/ToDoBlock";

function App() {
  return (
    <div className="App">
      <div>
        <p className="App__p">todos</p>
      </div>
      <ToDoBlock />
    </div>
  );
}

export default App;
