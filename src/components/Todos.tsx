import { useState, useEffect, SetStateAction } from "react";
import "./Todos.scss";

export default function Todos() {
  const [todos, setTodos] = useState<any[]>([]);
  const [inputText, setInputText] = useState("");
  const [todoKey, setTodoKey] = useState(0);

  interface Todo {
    id: number;
    title?: string;
    completed?: boolean;
  }

  // Mounted
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => {
        const result = json.filter(
          (item: { userId: number }) => item.userId === 1
        );
        setTodos(result);
        setTodoKey(result.length + 1);
      });
  }, []);

  const render = todos.map((todo: Todo) => {
    return (
      <div key={todo.id}>
        <div>
          <span className="todoTitle" onClick={() => modTodo(todo.id)}>
            #{todo.id} / {todo.title}
          </span>
          <span className="todoCompleted" onClick={() => modTodo(todo.id)}>
            {todo.completed ? "DONE ✅" : "TODO"}
          </span>
          <button className="todoBtn" onClick={() => delTodo(todo.id)}>
            ❌
          </button>
        </div>
      </div>
    );
  });

  // Insert
  const addTodo = (inputText: string) => {
    const addItems: any = [...todos, { id: todoKey, title: inputText }];
    setTodoKey(todoKey + 1);
    setTodos(addItems);
    setInputText("");
  };

  // Delete
  const delTodo = (id: number) => {
    const delItem = todos.filter((item: any) => {
      return item.id !== id;
    });
    setTodos(delItem);
  };

  // Update
  const modTodo = (id: number) => {
    const modItem = todos.map((item: any): SetStateAction<never[]> => {
      return item.id === id ? { ...item, completed: !item.completed } : item;
    });
    setTodos(modItem);
  };

  return (
    <div>
      <h1>Todos</h1>
      <div>
        <input
          type="text"
          placeholder="New Todo"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        ></input>
        <button onClick={() => addTodo(inputText)}>SEND</button>
      </div>
      <div>{render}</div>
    </div>
  );
}
