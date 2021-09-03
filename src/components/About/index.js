import React from 'react'
import personalImage from '../../assets/me.jpg'
function About() {
    return(
        <section classname="my-5">
            <h1 id="about">Who am I?</h1>
            
            <div className="my-2">
                <p  className="my-2">
                    My name is Mitchell Pullin, I am a newly budding coder learning the ropes. I made this website
                    using react to help improve my portfolio page. I enjoy playing video games as well as 
                    watching movies and anime. 
                </p> 
                <img src={personalImage} className="flex-row" style={{width:"25%"}} alt="me" />
            </div>
        </section>
    )
}

export default About