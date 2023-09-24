import PanelFilter from "./PanelFilter";
import "./ToDoBlock.css";

const Panel = (props) => {
  return (
    <div className="panel">
      <p className="panel__p">{props.item} left Completed</p>
      <PanelFilter onClickEvent={props.onFilteredEvent} />
      <button onClick={props.onDeleteEvent}>Clear completed</button>
    </div>
  );
};

export default Panel;
