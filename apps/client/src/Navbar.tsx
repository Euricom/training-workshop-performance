import React from 'react'
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className='flex gap-2'>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/markdown">Markdown</Link>
        <Link to="/bigdate">BigDate</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/users">Users</Link>
    </nav>
  )
}
