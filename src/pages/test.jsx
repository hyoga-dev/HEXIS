import { Outlet, Link } from "react-router-dom";
import "../test.css"


const test = () => {
  return (
    <>
        <Link to="/contact">contact</Link> <br/>
        <Link to="/layout">layout</Link><br/>
        {/* <Link to="/layout">layout</Link> */}


      
        <p>
            haiisd
        </p>
        <a href="/home"></a>
        
        {/* <Outlet/> */}
    </>
  );
};

export default test;
