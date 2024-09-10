import React from 'react'
import Banner from '../assets/project.jpg'
import './Project.css'


function Project() {
  return (
    <section id ="project">
        <h2 className='projectTitle'>My project-1</h2>
        <span className='projectDesc'>Here are my project</span>
        <div className='project-item'>
            <div className='item-details'>
                <p className='P1'>Project-1</p>
                <p className='P2'>TechStack:- HTML and CSS</p>

            </div>
            <a href='#'><img src={Banner} alt='Project-1' className='projectImg'/></a>
        </div>
      
      
        

    </section>
  )
}

export default Project
