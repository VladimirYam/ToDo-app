import "./ToDoBlock.css";

const PanelFilter = (props) => {
  return (
    <div className="panel-filter">
      <button onClick={props.onClickEvent}>All</button>
      <button onClick={props.onClickEvent}>Active</button>
      <button onClick={props.onClickEvent}>Completed</button>
    </div>
  );
};

export default PanelFilter;
