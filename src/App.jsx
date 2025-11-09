import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./pages/test";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Test text="anuu2adfaf2442"/>} />
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>

    // <BrowserRouter>
    //   <Routes>
    
    //     <Route path="/layout" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="home" element={<Home />} />
    //       <Route path="blogs" element={<Blogs />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>

    //     <Route path="/" element={<Test text="anuu2adfaf2442"/>} />
    //     <Route path="contact" element={<Contact />} />

    //   </Routes>
    // </BrowserRouter>
  );
}

