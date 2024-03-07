import React from 'react'
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className='flex gap-2'>
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Markdown">Markdown</Link>
        <Link to="/BigDate">BigDate</Link>
        <Link to="/Calculator">Calculator</Link>
        <Link to="/Users">Users</Link>
    </nav>
  )
}
