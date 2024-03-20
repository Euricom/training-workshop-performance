import { Navbar } from "./Navbar";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterElement } from "./routes/index.ts";

const queryClient = new QueryClient();
const App = () => {
  return (
    <div className="w-screen">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <div className="p-2">
            <RouterElement />
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
};

export default App;
