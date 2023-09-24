import "./ToDoBlock.css";

const ToDo = (props) => {
  const completedHandler = () => {
    props.onCompleted(props.id);
  };
  return (
    <li className={props.className} onClick={completedHandler}>
      {props.children}
    </li>
  );
};

export default ToDo;
