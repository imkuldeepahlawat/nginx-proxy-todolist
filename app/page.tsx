"use client";
import TodoCard from "@/components/todoCard";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface todoTYPES {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export default function Home() {
  const [todoListState, setTodoListState] = useState<todoTYPES | any>([]);
  const res = axios
    .get("https://dummyjson.com/todos")
    .then((data) => {
      // console.log(data);
      setTodoListState(data.data.todos);
    })
    .catch(() => {
      console.log("error while loading");
    });
  // const handleFetchTodoList = async ()=>{
  //   try {

  //   } catch (error) {

  //   }
  // }
  useEffect(() => {}, []);
  // if (data.length > 0) {
  return (
    <>
      {todoListState.map((item: todoTYPES, i: number) => {
        return <TodoCard key={i} data={item} />;
      })}
    </>
  );
  // }

  // return <></>;
}
