import React from "react";
import { Element } from "react-scroll";
import Nikiljacson_A from '../../assets/Nikiljacson_A.jpg';
import './About.css';
// import developer from '../../assets/developer.jpg'; 

function AboutMe() {
    const my_CV="https://drive.google.com/file/d/1U6FFvadK9zvpAyR9eZWd32JI7vXpyakN/view?usp=share_link";

    const downloadCV=(url)=>{
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    return(
        <Element name="about" className="aboutMe_Container">
            <div className="aboutMe_Content">
                <img src={Nikiljacson_A}/>
                <div className="aboutMe_details">
                <h1><span>Mr</span>.Nikil jacson</h1>
                <p>A Passionate <span>Web Developer</span></p>
               
                    <button className="aboutMe_downloadButton" onClick={()=>{downloadCV(my_CV)}}>Download CV</button>
        
                </div>
                </div>
                <p className="intro">
                    &nbsp; &nbsp;My passion for software development started when I took my first programming course. <br/>I love the challenge of solving complex problems and the satisfaction of seeing my code come to life.<br/>
                    I believe that the best solutions come from working closely with a team and constantly iterating on ideas. <br/>
                    In the short-term, I'm excited to gain more experience in the industry and work on projects that challenge me. <br/>In the long-term, I hope to become a lead developer and work on innovative projects that have a positive impact on people's lives.<br/>
                    Thank you for taking the time to visit my portfolio website.
                </p>
            
        </Element>


    );
}
export default AboutMe;

