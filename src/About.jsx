import React from 'react'
import {NavLink} from 'react-router-dom'
import Common from './Common'
import web from './Images/about.png'

const About = () =>{
    return (
        <> 
            <Common 
            name="Welcome to About Page"
            button="Contact Now"
            href="/contact"
            imgSrc = {web}
            />
         </>
    )
}

export default About