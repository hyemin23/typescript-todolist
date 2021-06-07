import axios from ".";
import { TodoType } from "../../../../html이미지파일/code 2/next-todo/types/todo";

//* 투두 리스트 불러오기 API
export const getTodosAPI = () => axios.get<TodoType[]>("api/todos");
