import { useRoutes } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import(`./pages/Home.tsx`));
const Products = lazy(() => import(`./pages/Products.tsx`));
const BigDate = lazy(() => import(`./pages/BigDate.tsx`));
const Markdown = lazy(() => import(`./pages/Markdown.tsx`));
const Calculator = lazy(() => import(`./pages/Calculator.tsx`));
const Users = lazy(() => import(`./pages/Users.tsx`));

export function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "products",
      element: <Products />,
    },
    {
      path: "bigdate",
      element: <BigDate />,
    },
    {
      path: "calculator",
      element: <Calculator />,
    },
    {
      path: "markdown",
      element: <Markdown />,
    },
    {
      path: "users",
      element: <Users />,
    },
  ]);
}
