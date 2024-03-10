import React from 'react'
import "./About.css"
import Main  from "../images/main.jpg"
import our from "../images/WhatsApp Image 2023-12-12 at 16.06.29.jpeg"
const About = () => {
  return (
    <div className='demo' id='about'>
    <div className='container'>
        <div className='col-1'>

            <p className='pmain'>ABOUT </p>
            <p>ROBOTREX NIBM</p>
            <p className='about_main'>Welcome to the NIBM Kurunegala Campus Robotics Competition, where innovation meets excitement! We are a group of passionate students and dedicated lecturers from the National Institute of Business Management (NIBM) Kurunegala Campus, united by a common vision to foster creativity, technological prowess, and entertainment through the thrilling world of robotics.</p>
            
        </div>
        <div className="col-2">
          <img className="imge" src={our} alt="" />
        </div>
       
    </div>
</div>
  )
}

export default About