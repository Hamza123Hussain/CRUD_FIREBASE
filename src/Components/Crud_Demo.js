import React, { useEffect, useState } from 'react'
import {db} from './FIREBASECONFIG'
import {addDoc,deleteDoc,updateDoc,doc,collection, getDocs} from 'firebase/firestore'
export const Crud_Demo = () => {
  
  const [user,setuser]=useState([]);
  const Collectionref=collection(db,'User-crud');
  
  const[name,setname]=useState("");
  const[image,setimage]=useState("");
  const adduser=async()=>{
await addDoc(Collectionref,{Name:name,Image:image});
alert("User HAS been created")
setname("");
setimage("");
  }
  
  
  useEffect(()=>{
    const getuser=async()=>{
        const data= await getDocs(Collectionref);
        setuser(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }

        getuser();
    },[Collectionref])
  
  

    const[newimage,setnewimage]=useState("");
  const elements = user.map((ele)=>{
    return <div>

        <h1>{ele.Name}</h1>
        <input type="url" value={newimage} onChange={(e)=>{setnewimage(e.target.value)}} /> 
        <button onClick={(id)=>{updatedoc(ele.id)}}>UPDATE IMAGE</button>
        <button onClick={(id)=>{delete_user(ele.id)}}>Delete me</button>
        <img src={ele.Image} alt="" />
    </div>
  })




  const delete_user=async (id)=>{
const userdoc=doc(db,"User-crud",id);
await deleteDoc(userdoc)
  }
  




const updatedoc=async(id)=>{
    const userdoc=doc(db,"User-crud",id);
    const newfield= {Image:newimage};
    await updateDoc(userdoc,newfield)
    alert("IMAGE UPDATED")

}



    return (
    <div>
<input value={name} type="text" onChange={(e)=>{setname(e.target.value)}} placeholder='ENTER NAME : ' />

<input value={image} type="url" onChange={(e)=>{setimage(e.target.value)}} placeholder='Enter Image url :' />


<button onClick={adduser}>Create User</button>
{elements}


    </div>
  )
}
