import React from 'react'
import { Link } from 'react-router-dom';


export const NavBar = () => {
  return (
    <div className='navbar'> 
        <Link to="/"></Link>
        <Link to="/details"></Link>
        
    </div>
  )
}