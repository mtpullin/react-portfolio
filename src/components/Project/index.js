import React from 'react'
import budget from '../../assets/budget.jpg'
import pizza from '../../assets/Pizza.jpg'
import potluck from '../../assets/potluck.jpg'
import notes from '../../assets/notes.jpg'
import zoo from '../../assets/zoo.jpg'
import techBlog from '../../assets/techblog.jpg'
function ProjectList() {
    return (
    <ul> 
    {/* add images for project web pages */}
        <h2>Projects</h2>
            <ul className="projects">
            <li>
                <h3>PotLuck Chefs</h3>
            <a href= "https://potluck-chef.herokuapp.com/index" target="_blank"rel="noreferrer"><img className="project-img" src={potluck} alt="potluck dinner"/></a>
            </li>
            <li>
            <a href= "https://github.com/mtpullin/potluck-chefs" target="_blank"rel="noreferrer">Github Repo</a>
            </li>
            <li>
                <h3>Tech Blog</h3>
            <a href="https://evening-island-00638.herokuapp.com" target="_blank"rel="noreferrer"><img className="project-img" src={techBlog} alt="tech-blog"/></a>
            </li>
            <li>
            <a href="https://github.com/mtpullin/tech-blog" target="_blank"rel="noreferrer">Github Repo</a>
            </li>
            <li>
                <h3>Budget Tracker</h3>
            <a href="https://rocky-thicket-24089.herokuapp.com" target="_blank"rel="noreferrer"><img className="project-img" src={budget} alt="BudgetTracker"/></a>
            </li>
            <li>
            <a href= "https://github.com/mtpullin/budget-tracker" target="_blank"rel="noreferrer">Github Repo</a>
            </li>
            <li>
                <h3>Pizza Hunt</h3>
            <a href="https://sleepy-atoll-95171.herokuapp.com" target="_blank"rel="noreferrer"><img className="project-img" src={pizza} alt="Pizza"/></a>
            </li>
            <li>
            <a href= "https://github.com/mtpullin/pizza-hunt" target="_blank"rel="noreferrer">Github Repo</a>
            </li>
            <li>
                <h3>Zoo Keepr</h3>
            <a href="https://sleepy-beach-45565.herokuapp.com" target="_blank"rel="noreferrer"><img className="project-img" src={zoo} alt="ZooAnimals"/></a>
            </li>
            <li>
            <a href= "https://github.com/mtpullin/zookeepr" target="_blank"rel="noreferrer">Github Repo</a>
            </li>
            <li>
                <h3>Note Taker</h3>
            <a href="https://vast-river-28185.herokuapp.com/" target="_blank" rel="noreferrer"><img className="project-img" src={notes} alt="Notebook"/></a>
            </li>
            <li>
            <a href= "https://github.com/mtpullin/note-taker" target="_blank"rel="noreferrer">Github Repo</a>
            </li>
            </ul>
        </ul>
    )
}


export default ProjectList;