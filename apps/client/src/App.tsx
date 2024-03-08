import { Navbar } from "./Navbar";
import Home from "./pages/Home.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products.tsx";
import BigDate from "./pages/BigDate.tsx";
import Calculator from "./pages/Calculator.tsx";
import Markdown from "./pages/Markdown.tsx";
import Users from "./pages/Users.tsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="p-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/bigdate" element={<BigDate />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/markdown" element={<Markdown />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
