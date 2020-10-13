import React, { useState } from 'react';
import Sresult from './Sresult'

const Search = () =>{
    const [img,setImg] = useState('')


    const inputEvent = (event) =>{
        const data = event.target.value
        console.log(data);
        setImg(data);
    }
    return(
        <>
        <div>
            <input type="text"
            onChange={inputEvent}
            value={img}
            placeholder="Search anything .."/>
        </div> <br/>
        <div>
            {img==='' ? null: <Sresult name={img}/>}
        </div>
        </>
    )
}

export default Search