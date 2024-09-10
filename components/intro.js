import React from 'react';
import { Link } from 'react-scroll';
import btnImg from '../assets/hireme.png';
import reactLogo from '../assets/react.svg';
import './intro.css';



function intro() {
  return (
    <section id="intro">
      <div className='introContent'>
        <span className="hello">Hello,</span>
        
        <span className='introText'>
          I'm <span className="introName">Divya</span>
          <br/>
          Web Developer
        </span>
        <p className='introPara'>
          I am a skilled web developer with experience in creating<br/>
          visually appealing and user-friendly websites.
        </p>
        <Link>
          <button className='btn2'>
            <img src ={btnImg} alt='Img' className='btnImg2'/>
            Hire me
          </button>
        </Link> 
      </div>
      <img src={reactLogo} className='logo2' alt="React logo"/>
    </section>
  );
}

export default intro;
