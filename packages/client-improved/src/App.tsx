import { Navbar } from "./Navbar";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes } from "./routes.tsx";
import { Suspense } from "react";

const queryClient = new QueryClient();
const App = () => {
  return (
    <div className="w-screen">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <div className="p-2">
            <Suspense fallback={<p> Loading...</p>}>
              <Routes />
            </Suspense>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
};

export default App;
