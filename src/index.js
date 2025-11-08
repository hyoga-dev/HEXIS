// import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import AppUdin from "./App";
import Todos from "./Todos";
import { useEffect, useState } from "react";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("rotah"));
// const name = "udin";

// const myElement = (
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ul>
// );

// const App = () => {
//   const name = "yahaya";

//   useEffect(() => {
//     console.log("Hello dari useEffect" + name);
//   }, []);

//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState(["todo 1", "todo 2"]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };

//   return (
//     <>
//       <Todos todos={todos} />
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// };

root.render(
  // <p>Hello {name} <input type="text" />;</p>
  <AppUdin />
  // myElement
  // <App />
);

reportWebVitals();
