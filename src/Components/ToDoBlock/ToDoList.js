import ToDo from "./ToDo";
import "./ToDoBlock.css";
import Panel from "./Panel";

const ToDoList = (props) => {
  return (
    <div>
      <ul className="todo">
        {props.events.map((event) => (
          <ToDo
            key={event.id}
            id={event.id}
            onCompleted={props.onCompletedEvent}
          >
            <span
              className={`material-symbols-outlined ${
                event.completed ? "check_circle" : "circle"
              }`}
            >
              check_circle
            </span>
            <p className={`${event.completed ? "completed" : ""}`}>
              {event.text}
            </p>
          </ToDo>
        ))}
      </ul>
      <Panel
        item={props.item}
        events={props.events}
        onDeleteEvent={props.onDelete}
        onFilteredEvent={props.onFiltered}
      />
    </div>
  );
};

export default ToDoList;
