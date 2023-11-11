import JavaScript from "./JavaScript";
import Classes from "./Classes/index";
import Styles from "./Styles/index";
import ConditionalOutput from "./ConditionalOutput";
import { useSelector } from "react-redux";
function Assignment3() {
  const { todos } = useSelector((state) => state.todosReducer);

  return (
    <div>
      <h1>Assignment 3</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <ConditionalOutput />
      <Styles />
      <Classes />
      <JavaScript />
    </div>
  );
}
export default Assignment3;
