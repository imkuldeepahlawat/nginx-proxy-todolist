import { todoTYPES } from "@/app/page";
import React from "react";

type Props = {
  data: todoTYPES;
};

const TodoCard = (props: Props) => {
  return (
    <div className="border w-[300px] mb-3 p-2">
      <p>Todo Id:-{props.data.id}</p>

      <h1>{props.data.todo}</h1>
      <h2>{props.data.userId}</h2>
      <p>{props.data.completed ? "Completed" : "Not Completed"}</p>
      <p>{props.data.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
};

export default TodoCard;
