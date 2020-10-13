import React from 'react'

const Sresult = (props) =>{
    const imgSrc = `https://source.unsplash.com/user/erondu/400x300/?${props.name}`;
    return(
        <>
        <div>
            <img src={imgSrc} alt="img"/>
        </div>
        </>
    )
}

export default Sresult