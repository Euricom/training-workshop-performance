import { Navbar } from "./Navbar";
import Home from "./pages/Home.tsx";
import "./index.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Products from "./pages/Products.tsx";
import BigDate from "./pages/BigDate.tsx";

const App = () =>  {
  return (
    <>
     <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/bigdate" element={<BigDate />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;