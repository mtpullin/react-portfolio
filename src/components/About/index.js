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
                    My name is Mitchell Pullin, I am a newly budding coder learning the ropes. I made this website
                    using react to help improve my portfolio page. I enjoy playing video games as well as 
                    watching movies and anime.
                    </div>
                   
                </div>
                </p> 
        </section>
    )
}

export default About