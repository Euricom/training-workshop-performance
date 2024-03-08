import { Navbar } from "./Navbar";
import Home from "./pages/Home.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Products from "./pages/Products.tsx";
import BigDate from "./pages/BigDate.tsx";
import Calculator from "./pages/Calculator.tsx";
import MarkdownPage from "./pages/Markdown.tsx";
import Users from "./pages/Users.tsx";

const queryClient = new QueryClient();
const App = () => {
  return (
    <div className="p-2">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/bigdate" element={<BigDate />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/markdown" element={<MarkdownPage />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
};

export default App;
