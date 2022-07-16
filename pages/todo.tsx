import React from "react";
import TaskBox from "../src/domains/todo/components/TaskBox";
const Todo = () => {
  return (
    <div>
      <TaskBox
        id={"hello"}
        type={"Hello"}
        description={"Hello"}
        title={"Hello"}
        attachments={2}
        date={new Date()}
      />
    </div>
  );
};

export default Todo;
