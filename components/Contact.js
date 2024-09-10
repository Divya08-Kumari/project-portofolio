import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'
import Facebook from '../assets/facebook.svg'
import Github from '../assets/github.svg'
import Instagarm from '../assets/instagram.svg'
import LinkedIn from '../assets/linkedin.svg'
import './Contact.css'



function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_il64umq', 'template_e3yzo8c', form.current, {
        publicKey: 'jZytAEZG6TTELEqc8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contact'>
      <div id='social'>
        <h1 className='socialTitle'>Social</h1>
        <p className='socialDesc'>Here you connect with me on my social media</p>
<div className='socialImgs'>
  <a href='https://www.linkeddin.cim/in/divya-kumari-56aa45299'><img src={LinkedIn} alt='LinkedIn' className='socialImg'/></a>
 <a href='#'><img src={Github} alt='Github' className='socialImg'/></a>
  <a href='https://www.instagram.com/divya_kashyap.8'><img src={Instagarm} alt='Instagram' className='socialImg'/></a>
  <a href='#'><img src={Facebook} alt='Facebook' className='socialImg'/></a>
  </div>
  </div>
  <div id="contactPage">
    <h1 className='contactTitle'>Contact</h1>
    <span className="contactDesc">Feel free to contact me</span>

    <form className='contactForm' ref={form} onSubmit={sendEmail}>
      <input type="text" className="name" placeholder="Your Name" name="from_name" required/>
      <input type="email" className="email" placeholder="Your Email" name="your_email" required/>
      <textarea className="msg" rows="5" placeholder="Your Message" name="message" required></textarea>
      <button type="submit" value="send" className="submitBtn" onClick={() => {alert("Your Form is submitted.")}}>Submit</button>

    </form>
  </div>
  </section>



    
  )
  
}

export default Contact
