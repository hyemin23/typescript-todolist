import React from "react";
import { GetServerSideProps, NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todo";

interface IProps{
  todos: TodoType[];
}
const app: NextPage<IProps> = ({ todos }) => {
  console.log(process.env.NEXT_PUBLIC_API_URL, "클라이언트 ");
  return <TodoList todos={todos} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    console.log(process.env.NEXT_PUBLIC_API_URL, "서버");

    const { data } = await getTodosAPI();

    return {
      props: {
        todos: data
      }
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        todos: []
      }
    };
  }
};
export default app;
