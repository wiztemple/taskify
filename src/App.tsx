import React, { useState } from 'react';
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import './App.css';
import Inputfield from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';

// let name: string = 'React';  // string
// let age: number = 24; // number
// let isDeveloper: boolean = true; // boolean
// let hobbies: string[] = ['Sports', 'Cooking'];  // Array
// let address: [string, number] = ['Street', 99]; // Tuple
// let union: (string | number | boolean)[] = ['a', 1, true];  // Array union
// let union2: string | number;  // string | number Union
// let printAddress: (address: string | number) => void;

// function printName(name:string) {
//   console.log(name);
// }
// printName("Sullivan");

// type Person = {
//   name: string;
//   age: number;
//   team?: string;
// }  // Person object
// let person: Person = {
//   name: 'Max',
//   age: 30,

// }

// let people: Person[] = []

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo("")
    }
  }

  const onDragEnd = (result: DropResult) => {}

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="App">
      <span className="heading">Taskify</span>
      <Inputfield todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
      />
    </div>
    </DragDropContext>
  );
}

export default App;
