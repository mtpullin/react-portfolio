import React from 'react'

function Header(props) { 
const tabs= ['About', 'Projects', 'Resume' ,'Contact']
    return (
    <header className="px-1 flex-row">
        <h1>
            <a href="">
                <span>Mitchell Pullin</span>   
            </a>
        </h1>
        <ul className="header">
      {tabs.map(tab => (
       
        <li key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            // Whenever a tab is clicked on,
            // the current page is set through the handlePageChange props.
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
    
      ))}
    </ul>
    </header>
)
}
export default Header