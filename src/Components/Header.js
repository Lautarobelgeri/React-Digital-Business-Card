import React from "react";

export default function Header(){
    return(
        <header className="Header">
            <div className="container">

            </div>
            <h1 className="Name">Lautaro Belgeri</h1>
            <h3 className="Profession">Frontend Developer</h3>
            <h4 className="Website">lautarobelgeri.website</h4>
            <a id="email" href="mailto: LautaroBelgeri@gmail.com" target="blank">
                <div className="email">
                    <img className="email-Icon" src="Email-Icon.png"></img>
                    <p className="emailText">Email</p>
                </div>
            </a>
            <a id="linkedin" href="https://www.linkedin.com/in/lautaro-belgeri-252954195/" target="blank">
                <div className="Linkedinc">
                    <img className="Linkedin-Icon" src="Vector.png"></img>
                    <p className="LinkedinText">LinkedIn</p>
                </div>
            </a>
        </header>
        
    )
}