import React from 'react'
import personalImage from '../../assets/me.jpg'
function About() {
    return(
        <section classname="">
            <h1 id="about">Who am I?</h1>  
                <p>
                <div className="about"> 
                    <div>
                    <img src={personalImage}  style={{width:"60%"}} alt="me" />
                    </div>
                    <div>
                    My name is Mitchell Pullin, I am a Full-Stack web developer leveraging restaurant background to build a more intuitive user experience on the web. 
                    Recently earned a certificate in full stack development from the University of Central Florida Coding Bootcamp, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. 
                    Known as a problem solver and hard worker, passionate about developing apps, and moving into a new field. With each project, my aim is to best engage my audience for an impactful user experience. 
                    I applied aspects of UX and agile development in a recent project. I worked on a team of three to develop a single-page MERN app resembling a satirical myspace/facebook styling to allow people who believe in flat-earth to befriend one another. 
                    I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web. 

                    </div>
                   
                </div>
                </p> 
        </section>
    )
}

export default About