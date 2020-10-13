import React from 'react'
import {NavLink} from 'react-router-dom'
import Common from './Common'
import web from './Images/home.png'

const Home = () =>{
    return (
        <> 
           <Common
           name = "Grow your business with"
           button = "Get Started"
           href="services"
           imgSrc = {web}
           />
         </>
    )
}

export default Home