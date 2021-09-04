import React from 'react'

function Header() { 
return (
    <header className="flex-row px-1">
        <h1>
            <a href="/">
                <span>Mitchell Pullin</span>   
            </a>
        </h1>
        <nav>
        <ul>
            <li>
                <a href="#about" className="header">About me</a>
                <a href="#project" className="header"> Projects</a>
                <a href= "#Contact" className="header">Contact</a>
            </li>
        </ul>
    </nav>
    </header>
)
}
export default Header