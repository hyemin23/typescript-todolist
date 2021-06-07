import { readFileSync, writeFileSync } from "fs";
import { TodoType } from "../../../../html이미지파일/code 2/next-todo/types/todo";

//* 투두 리스트 데이터 불러오기
const getList = () => {
  const todosBuffer = readFileSync("data/todos.json");
  const todosString = todosBuffer.toString();
  if (!todosString) {
    return [];
  }
  const todos: TodoType[] = JSON.parse(todosString);
  return todos;
};

//* id의 투두가 있는지 확인하기
const exist = ({ id }:{id:number}) => {
  const todos = getList();
  const todo = todos.some((todo) => todo.id === id);
  return todo;
};
export default { getList };
