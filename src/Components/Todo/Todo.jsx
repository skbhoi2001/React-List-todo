import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";

function Todo() {
  const [list, setList] = useState([]);
  const [showComplete, setShowComplete] = useState(false);
  const handleSubmit = ({ title, description }) => {
    const payload = {
      id: uuid(),
      title,
      description,
      status: list.length % 2 === 0 ? true : false
    };
    setList([...list, payload]);
  };
  return (
    <div>
      <TodoInput onSubmit={handleSubmit} />
      {/* by default i only show incomplete */}
      <TodoList data={list.filter((item) => !item.status)} />
      {/* <div>
        <button onClick={() => setShowComplete(!showComplete)}>
          toggle show complete
        </button>
      </div>
      {showComplete && <TodoList data={list.filter((item) => item.status)} />} */}
    </div>
  );
}

export default Todo;
