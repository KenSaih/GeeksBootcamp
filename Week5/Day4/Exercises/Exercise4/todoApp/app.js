import { TodoList } from "./todo.js";

const myTodoList = new TodoList();

myTodoList.addTask('Coding practice');
myTodoList.addTask('Go to the gym');
myTodoList.addTask('Watch a movie');

myTodoList.markTaskComplete('Tasks Finished');

myTodoList.listTasks();

