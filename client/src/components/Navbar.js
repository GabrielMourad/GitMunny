import React from 'react'

export default function Navbar({}) {
  return (
    <div className = "nav_container">
        <header>
            <h4>Gitmunny</h4>

        <nav>
            <ul className="nav_links">
                <li><a href="">Dashboard</a></li>
                <li><a href="">B</a></li>
                <li><a href="">C</a></li>
                
            </ul>
        </nav>
        <a href="#" className="cta"><button className = "navbtn">Logout</button></a>
        </header>
    </div>
  )
}
