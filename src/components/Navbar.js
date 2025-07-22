import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
   
  return (
    <div>
        <nav>
            <ul>
              <Link to='/'      ><li>Home</li></Link>
              <Link to='/About' ><li>About</li></Link>
              <Link to='/Login' ><li>Login</li></Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar