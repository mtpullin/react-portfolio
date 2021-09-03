import React from 'react'
import personalImage from '../../assets/me.jpg'

function About() {
    return(
        <section classname="my-5">
            <h1 id="about">Who am I?</h1>
            
            <div className="">
                
                <p  className="my-2">
                    <img src={personalImage} className="" style={{width:"25%"}} alt="me" />
                    My name is Mitchell Pullin, I am a newly budding coder learning the ropes. I made this website
                    using react to help improve my portfolio page. I enjoy playing video games as well as 
                    watching movies and anime. 
                </p>
            </div>
        </section>
    )
}

export default About