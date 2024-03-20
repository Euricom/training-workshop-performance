import { useRoutes } from "react-router-dom";
import { lazyLoadRoutes } from "./LazyLoadRoutes";

export function RouterElement() {
  const routes = [
    {
      path: "/",
      name: "Home",
      element: lazyLoadRoutes("Home"),
    },
    {
      path: "products",
      name: "Products",
      element: lazyLoadRoutes("Products"),
    },
    {
      path: "bigdate",
      name: "BigDate",
      element: lazyLoadRoutes("BigDate"),
    },
    {
      path: "calculator",
      name: "Calculator",
      element: lazyLoadRoutes("Calculator"),
    },
    {
      path: "markdown",
      name: "Markdown",
      element: lazyLoadRoutes("Markdown"),
    },
    {
      path: "users",
      name: "Users",
      element: lazyLoadRoutes("Users"),
    },
  ];

  return useRoutes(routes);
}

// <Route path="/" element={<Home />} />
// <Route path="/products" element={<Products />} />
// <Route path="/bigdate" element={<BigDate />} />
// <Route path="/calculator" element={<Calculator />} />
// <Route path="/markdown" element={<Markdown />} />
// <Route path="/users" element={<Users />} />
