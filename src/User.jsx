import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';


const User = () =>{
    const {name,lname} = useParams()
    const location = useLocation()
    const history = useHistory()
    return(
        <>
        <h1>User Page ..</h1>
    <h3>Hi this is me {name} {lname}</h3>
    <p>My Current Locations is {location.pathname}</p>
    {location.pathname === `/user/Abdullah/Technical` ? (
        <button onClick={()=> history.goBack()}>Click Me</button>
    ): null}
        </>
    )
}

export default User