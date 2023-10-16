import React from "react";
import AddReducer from "./AddRedux/index";
import CounterReducer from "./CounterRedux/index";
import HelloReducer from "./HelloRedux/index";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return (
    <div>
      <HelloReducer />
      <CounterReducer />
      <AddReducer />
      <TodoList />
    </div>
  );
};

export default ReduxExamples;
