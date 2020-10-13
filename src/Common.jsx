import React from 'react'
import {NavLink} from 'react-router-dom'
import web from './Images/home.png'

const Common = (props) =>{
    return (
        <> 
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                <h1>{props.name} <strong className="brand-name"> Abdullah Offici4L</strong></h1>
                                <h2 className="my-3">Let us take you into a deeper experience, make a moment a lasting conveyable memory. Let us help build your tribe.</h2>
                                <div className="mt-3">
                                    <NavLink to={props.href} className="btn-get-started">{props.button}</NavLink>
                                </div>
                            </div>
                       
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgSrc} alt="img" className="img-fluid animated"/>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                
            </section>
         </>
    )
}

export default Common