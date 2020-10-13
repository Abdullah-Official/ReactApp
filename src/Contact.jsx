import React, { useState } from 'react';

const Contact = () =>{
    
    const [data,setData] = useState({
        fname: '',
        phone: '',
        email: '',
        msg: ''
    })

    const inputEvent = (event) =>{
        const {name,value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name] : value,
            }
        })
    }

    const formSubmit = (e) =>{
        e.preventDefault();
        alert(` CONTACT INFORMATION\:- \n\n Name: ${data.fname}\n Phone: ${data.phone}\n Email: ${data.email}\n Contact: ${data.msg}`)
    }



    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form action="">
                    <form onSubmit={formSubmit}>
  <div className="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" className="form-control" name='fname' value={data.fname} onChange={inputEvent} required id="exampleFormControlInput1" placeholder="Enter your name .."/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Phone</label>
    <input type="number" className="form-control "name='phone' value={data.phone} onChange={inputEvent} required  id="exampleFormControlInput1" placeholder="Mobile number"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control"name='email' value={data.email} onChange={inputEvent} required  id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control"name='msg' value={data.msg} onChange={inputEvent} required id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div className="col-10">
  <button class="btn btn-outline-primary my-3" type="submit">Submit form</button>
  </div>
</form>
                    </form>
                </div>
            </div>
        </div>

        </>
    )
}

export default Contact 