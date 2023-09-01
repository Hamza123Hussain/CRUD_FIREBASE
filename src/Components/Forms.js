import React, { useState } from 'react'



export const Forms = () => {



    const[data,setdata]=useState({
        Name:" ",
        Email:" ",
        Phone:" ",
        Address:" ",
    Messagge:" "})
    
    
    
    const datachnage=(e)=>{
        const{name,value}=e.target;
    
        setdata({...data,[name]:value})
    
    }

    const  Postdata = async(e)=>{
        e.preventDefault();
const{Name,Email,Phone,Messagge,Address}=data
        const res= await fetch("https://fir-9d7f0-default-rtdb.firebaseio.com/Forms.json",{

method:'POST',
headers:{
    "Content-Type":"application/json",
    },
    body:JSON.stringify({

Name,
Email,
Phone,
Messagge,
Address


    })




        })


if(res){
    alert('Data Submitted')
    setdata({
        Name:" ",
        Email:" ",
        Phone:" ",
        Address:" ",
        Messagge:" "

    })



    
    }
}

    

    
  return (
    <>
<div className='Container'>


<div className="Shape">




<form onSubmit={Postdata}  action="#" method="post">

    <div className='FLEXS'>
        <div>
{/* <label htmlFor="Name">Your Name : </label> */}
<input value={data.Name} onChange={datachnage} placeholder='Enter NAME' style={{width:'200px'}}type="text" name="Name" id="" />
</div>

<div>
{/* <label  style={{width:'200px'}} htmlFor="Name">Email:</label> */}
<input value={data.Email} onChange={datachnage} placeholder='Enter EMAIL'  style={{width:'200px'}} type="email" name="Email" id="" />
</div>

</div>
<div className='FLEXS'>

<div>
{/* <label style={{width:'200px'}} htmlFor="Name">Mobile Number:</label> */}
<input value={data.Phone} onChange={datachnage} placeholder='Enter phone number : '  style={{width:'200px'}} type="number" name="Phone" id="" />
</div>


<div>
{/* <label  style={{width:'200px'}} htmlFor="Name">Address : </label> */}
<input placeholder='Enter Address' value={data.Address} onChange={datachnage}  style={{width:'200px'}} type="text" name="Address" id="" />
</div>

</div>


<div className='FLEXBOX'>
<label htmlFor="Messagge"> Message : </label>
<textarea value={data.Messagge} onChange={datachnage} name="Messagge" id="" cols="30" rows="10"></textarea>





<input type="submit" value="Submit" />
</div>

</form>


</div>






</div>
       
    </>
  )
}
