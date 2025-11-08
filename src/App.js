import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Test from "./pages/test";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/layout" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
        </Route>

        <Route path="/" element={<Test/>} />
        <Route path="contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

