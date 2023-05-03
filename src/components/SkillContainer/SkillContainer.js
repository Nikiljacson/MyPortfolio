import React from 'react';
import {Element} from 'react-scroll';
import developer from '../../assets/developer.jpg';
import { LinearProgress } from '@mui/material';
import './SkillContainer.css';

function SkillContainer(params) {
    return(
        <Element name='skills' className='skillContainer'>
            <div className='skillContainer_image'>
                <img src={developer} alt='Skills image'/>
            </div>
            <div className='skillContainer_text'>
                <h2>SKILLSET</h2>
                <div className='skillContainer_skillSet'>
                    <h5>React</h5>
                    <div className='skillContainer_slider skillContainer_slider1'>
                        <LinearProgress variant='determinate' value={80}/>
                    </div>
                </div>
                <div className='skillContainer_skillSet'>
                    <h5>SQL</h5>
                    <div className='skillContainer_slider skillContainer_slider2'>
                        <LinearProgress variant='determinate' value={80}/>
                    </div>
                </div>
                <div className='skillContainer_skillSet'>
                    <h5>C#</h5>
                    <div className='skillContainer_slider skillContainer_slider3'>
                        <LinearProgress variant='determinate' value={70}/>
                    </div>
                </div>
                <div className='skillContainer_skillSet'>
                    <h5>JAVA</h5>
                    <div className='skillContainer_slider skillContainer_slider4'>
                        <LinearProgress variant='determinate' value={70}/>
                    </div>
                </div>
            </div>


        </Element>
    );
}

export default SkillContainer;