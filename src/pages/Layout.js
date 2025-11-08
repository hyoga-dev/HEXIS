import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">root</Link>
          </li>
          <li>
            <Link to="/layout/home">Home</Link>
          </li>
          <li>
            <Link to="/layout/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/layout/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <p>haii</p>

      <Outlet />
    </>
  )
};

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


export default Layout;