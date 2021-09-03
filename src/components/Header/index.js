import React from 'react'

function Header() { 
return (
    <header className="flex-row px-1">
        <h2>
            <a href="/">
                <span>Mitchell Pullin</span>   
            </a>
        </h2>
        <nav>
        <ul>
            <li>
                <a href="#about">
                    About me
                </a>
            </li>
        </ul>
    </nav>
    </header>
)
}
export default Header