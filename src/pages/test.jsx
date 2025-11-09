import { Link } from "react-router-dom";
import "../style/test.module.css"
import { useEffect } from "react";
import Login from "./Login";

function Test (prop) {
  useEffect(() => {
    loging2();
  }, []);
  const anu = prop.text;
  // const teststyle = `${styles.tust}, ${styles.test}`;
  // const myStyle = {
  //   margin: "20px"
  // }
  return (
    <div className="m">
        <h1>
          bambang
        </h1>
        <Link to="/login">bambang</Link>
        <p>{anu}</p>
        <button onClick={loging}>hai</button>
        <Login/>
    </div>
  );
}

function loging2 () {
  console.log("huraaa");
}

function loging () {
  console.log("haii");
}

export default Test;
