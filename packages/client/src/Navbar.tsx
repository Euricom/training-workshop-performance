import { Link } from "react-router-dom";
import euricomLogo from "/euricom_logo_small.png";
export const Navbar = () => {
  return (
    <nav className="flex gap-6 items-center shadow-md h-12 p-2">
      <Link to="/" className="flex space-x-3 mr-auto">
        <img src={euricomLogo} className="h-8" alt="Euricom logo" />
        <span className=" text-2xl font-semibold ">Performance app</span>
      </Link>

      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/bigdate">Bigdate</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/markdown">Markdown</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};
