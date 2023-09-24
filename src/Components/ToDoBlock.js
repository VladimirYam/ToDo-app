import "./ToDoBlock/ToDoBlock.css";
import NewToDo from "./ToDoBlock/NewToDo";
import React, { useState, useEffect } from "react";
import ToDoList from "./ToDoBlock/ToDoList";

const ToDoBlock = () => {
  const [eventList, setEventList] = useState([]);
  const [eventListActive, setEventListActive] = useState([]);
  const [eventListCompleted, setEventListCompleted] = useState([]);

  useEffect(() => {
    const eventList = JSON.parse(localStorage.getItem("events"));
    if (eventList) {
      setEventList(eventList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(eventList));
  }, [eventList]);

  const createEventHandler = (text) => {
    setEventList((prevEventList) => {
      return [
        { text: text, completed: false, id: Math.random().toString() },
        ...prevEventList,
      ];
    });
  };

  const completedEventHandler = (eId) => {
    setEventList((prevEventList) => {
      const completedEvent = prevEventList.map((event) => {
        if (event.id === eId) {
          event.completed = !event.completed;
        }
        return event;
      });
      return completedEvent;
    });
  };

  const deleteEventHandler = () => {
    setEventList((prevEventList) => {
      const deleteEvent = prevEventList.filter((event) => {
        return !event.completed;
      });
      return deleteEvent;
    });
    setEventListCompleted((prevEventList) => {
      const deleteEvent = prevEventList.filter((event) => {
        return !event.completed;
      });
      return deleteEvent;
    });
  };

  const filteredEventHandler = (e) => {
    if (e.target.textContent === "All") {
      setEventList(eventList);
      setEventListActive([]);
      setEventListCompleted([]);
    }
    if (e.target.textContent === "Active") {
      setEventListCompleted([]);
      setEventListActive(() => {
        const eventListActive = eventList.filter((event) => {
          return !event.completed;
        });
        return eventListActive;
      });
    }
    if (e.target.textContent === "Completed") {
      setEventListActive([]);
      setEventListCompleted(() => {
        const eventListCompleted = eventList.filter((event) => {
          return event.completed;
        });
        return eventListCompleted;
      });
    }
  };

  const itemLeftHandler = () => {
    const left = eventList.filter((event) => {
      return !event.completed;
    });
    return left.length;
  };

  return (
    <div>
      <div className="todo-block">
        <NewToDo onCreateEvent={createEventHandler} />
        <ToDoList
          item={itemLeftHandler()}
          events={
            eventListActive.length !== 0
              ? eventListActive
              : eventListCompleted.length !== 0
              ? eventListCompleted
              : eventList
          }
          onCompletedEvent={completedEventHandler}
          onDelete={deleteEventHandler}
          onFiltered={filteredEventHandler}
        />
      </div>
      <div className="todo-block__1"></div>
      <div className="todo-block__2"></div>
    </div>
  );
};

export default ToDoBlock;
