import React from 'react'
import Html from '../assets/HTML5_Badge.svg'
import Bootstrap from '../assets/bootstrap.png'
import CSS from '../assets/css-3.svg'
import Javascript from '../assets/javascript.svg'
import './about.css'

function about() {
    return (
        <section id="about">
            <span className ="aboutTitle">what i know</span>
            <br/>
            <span className ="aboutDesc">I am a skiled and passionated web designer with experience in creating visually appealing</span>
            <div className='aboutBars'>
                <div className="aboutBar">
                    <img src = {Html} alt ="" className='aboutBarImg'/>
                <div className='aboutBarText'></div>
                    <h2>HTML</h2>
                    <br/>
                    <br/>
                    <p>HyperText Markup Language</p>

                
                </div>
                
                
                    <div className="aboutBar">
                        <img src={Bootstrap} alt="" className='aboutBarImg'/>
                        <div className='aboutBarText'></div>
                        <h3>Bootstrap</h3>
                        
                    </div>

                    <div className='aboutBar'>
                        <img src={CSS} alt='' className='aboutBarImg'/>
                        <div className='aboutBarText'></div>
                        <h4>CSS</h4>
                        <p>Cascading Styling sheets</p>


                    </div>

                
                
                    <div className='aboutBar'>
                        <img src={Javascript} alt='' className='aboutBarImg'/>
                        <div className='aboutBarText'></div>
                        <h5>Javascript</h5>
        

                    </div>

                </div>

           
            
            </section>
    )
}
export default about