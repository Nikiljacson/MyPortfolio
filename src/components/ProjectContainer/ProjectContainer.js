import React from "react";
import {Element} from 'react-scroll';
import Projects from '../Projects/Projects';
import './ProjectContainer.css';
import TodoList from '../../assets/TodoList.jpg';
import weatherapp from '../../assets/weatherapp.jpg';
import QuizWorld from '../../assets/QuizWorld.jpg';

function ProjectContainer(params) {
    const my_projects=[
        {
            img:TodoList,
            title:"To-do List App",
            desc:"This is a simple project that involves creating a to-do list application using ReactJS.",
            link:"https://nikiljacson.github.io/to-do-list/"
        },
        {
            img:weatherapp,
            title:"Weather App",
            desc:"This project helps user to search the current weather condition in the location they search.",
            link:"https://nikiljacson.github.io/weather-forecast-app/"
        },
         {
            img:QuizWorld,
            title:"Quiz World",
            desc:"Quiz world is an interactive web application that allows users to take quizzes on various topics.",
            link:"https://nikiljacson.github.io/QuizWorld/"
        }
    ];
    return(
        <div>
            <Element name="projects" className="projectContainer">
                
            <h1>Projects</h1>
            <p>Here are some projects which i did for my learning</p>

            <div className="projectContainer-projects">
                {my_projects.map((projects,index)=>{
                    return(
                        <Projects key={index} img={projects.img} title={projects.title} desc={projects.desc} link={projects.link}/>
                    );
                })}
            </div>
            </Element>
        </div>
    );
}
export default ProjectContainer;
