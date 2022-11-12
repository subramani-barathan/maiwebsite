import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/site/Main";
import Home from "./components/admin/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Home />} />
        <Route exact path="/" element={<Main page="Home" />} />
        <Route path="/about" element={<Main page="About" />} />
        <Route path="/contact" element={<Main page="Contact" />} />
        <Route path="/product" element={<Main page="Product" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
