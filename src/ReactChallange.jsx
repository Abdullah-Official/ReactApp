import React from 'react';
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import './index.css';
import Tooltip from '@material-ui/core/Tooltip';
import CountdownTimer from "react-component-countdown-timer";
import Clock from 'react-digital-clock';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const ReactChallange = () =>{
    var settings = {
        count: 5432,
        border: true,
        showTitle: true,
        noPoints: true,
      };
    // const [num,setNum] = useState(0)
   

    // const IncNum = () =>{
    //     setNum(num+1)
    // }

    // const decNum = () =>{
    //   if(num>0){
    //     setNum(num-1)
    //   }else{
    //       setNum(0)
    //       alert("Limit reached")
    //   }
       
    // }
    

   return(
    <>
    {/* <button className="btn btn-danger">Hi</button>
<CountdownTimer {...settings} /> */}


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-link" href="#">Features</a>
      <a class="nav-link" href="#">Pricing</a>
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </div>
  </div>
</nav>






    {/* <div className="main_div">
   <h1>{num}</h1>
   <div>
        <Tooltip title="Add">
        <Button className="b_1"  onClick={IncNum}><AddIcon/></Button>

        </Tooltip>
        <Tooltip title="Delete">
        <Button onClick={decNum}><  DeleteIcon/></Button>
        </Tooltip>
    
   </div>
    </div> */}
    </>

   )
}

export default ReactChallange
