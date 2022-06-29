import { useState, useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([""]);

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  // const calculation = expensiveCalculation(count);

  const increment = () => { setCount((c) => c + 1) };
  const addTodo = () => { setTodos((t) => { return [...t, "oi"] }) };

  return (<div>
    <div>
      <h2>Adicionar Elemento</h2>
      {todos.map((todo, index) => { return <p key={index}>{todo}</p> })}
      <button onClick={addTodo}>Adicionar</button>
    </div>
    <hr />
    <div>
      Adicionar:  {count}
      <button onClick={increment}> + </button>
      <h2>Calculo</h2>
      {calculation}
    </div>
  </div>
  );
};

const expensiveCalculation = (num: number) => {
  console.log("Calculating...");
  for (let i = 0; i < 10000000000000; i++) {
    num += 1;
  }
  return num;
};

export default App;


