import React, {useState} from 'react'

function ProjectList() {
    return (
    <ul className="projects"> 
    {/* add images for project web pages */}
        <h3>Projects</h3>
            <li>
                <h5>PotLuck Chefs</h5>
            <a href= "https://potluck-chef.herokuapp.com/index" target="_blank"><img className="project-img" src="./assets/" /></a>
            </li>
            <li>
                <h5>Tech Blog</h5>
            <a href="https://evening-island-00638.herokuapp.com" target="_blank"><img className="project-img" src="./assets/" /></a>
            </li>
            <li>
                <h5>Fund Manager</h5>
            <a href="https://rocky-thicket-24089.herokuapp.com" target="_blank"><img className="project-img" src="./assets/" /></a>
            </li>
            <li>
                <h5>Pizza Hunt</h5>
            <a href="https://sleepy-atoll-95171.herokuapp.com" target="_blank"><img className="project-img" src="./assets/" /></a>
            </li>
            <li>
                <h5>Zoo Keepr</h5>
            <a href="https://sleepy-beach-45565.herokuapp.com" target="_blank"><img className="project-img" src="./assets/" /></a>
            </li>
            <li>
                <h5>Note Taker</h5>
            <a href="https://vast-river-28185.herokuapp.com/" target="_blank"><img className="project-img" src="./assets/" /></a>
            </li>
        </ul>
    )
}


export default ProjectList;