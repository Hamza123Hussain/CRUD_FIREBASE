// import React from 'react';
// import { useEffect, useState } from 'react';
// import { db } from './FIREBASECONFIG';
// import {collection,getDocs,addDoc,updateDoc,doc, deleteDoc}from "firebase/firestore";


// export const Firebase_crud = () => {
//     const [user,setuser]=useState([]);
//     const usercollectionref=collection(db,"User-crud") // this is fireabse database
  

  
  
//   //CREATING DATA FOR FIREBASE DATABASE------------------------------------------------------------------------------------
//   const[name,setname]=useState("");
//   const[age,setage]=useState(0);
//   const create_user=async()=>{
//     await addDoc(usercollectionref,{Name:name,Age:age})
//     alert("User has been created")
//   }
//   //CREATING DATA FOR FIREBASE DATABASE------------------------------------------------------------------------------------
  
  
  

// //-------------------------------------------READING FIREBASE DATA------------------------------------------------------------

// useEffect(()=>{
//   const getusers=async()=>{
//     const data= await getDocs(usercollectionref); 
//     setuser(data.docs.map((doc)=>({...doc.data(),id:doc.id})));// getting required data fields and id from firebase
//   }

//   getusers()
// },[usercollectionref])


// //-------------------------------------------READING FIREBASE DATA------------------------------------------------------------







  
//   //-----------------------------DISPLAY FIREBASE DATABASE----------------------------------------------------------------
// const elements = user.map((ele)=>{
//     return <div>
//       <h1>Name : {ele.Name}</h1>   {/*Attaining field names */}
//       <h1>Age : {ele.Age}</h1>
//       <button onClick={()=>{update(ele.id,ele.Age)}} >INCREASE AGE</button>
//       <input type="text" onChange={(e)=>{setname(e.target.value)}} />
//       <button onClick={()=>{updatename(ele.id)}}>Change Name</button>
//     <button onClick={()=>{delete_user(ele.id)}}>DELETE ME</button>
//     </div>
//   })
//   //-----------------------------DISPLAY FIREBASE DATABASE----------------------------------------------------------------
  
  


  
  
//   //-----------------------------updating values in a database------------------------------------------------------------
//   const update=async(id,Age)=>{
//   const userDoc=doc(db,"User-crud",id);
//   const new_fields={Age:Age+1};
//   await updateDoc(userDoc,new_fields)  /*This will increase the age by one*/
//   }
  
//   const updatename = async(id)=>{
  
//       const userDoc=doc(db,"User-crud",id);
//       const new_fields={Name:name};
//       await updateDoc(userDoc,new_fields)  
//   }
//   //-----------------------------updating values in a database------------------------------------------------------------
    



//   //-----------------------------deleting values in a database------------------------------------------------------------
    
  
//   const delete_user=async(id)=>{
//     const userDoc=doc(db,'User-crud',id);
//     await deleteDoc(userDoc);
//   }
//   //-----------------------------deleting values in a database------------------------------------------------------------
    
  
  
  
//   return (
//       <div className="App">
//   <input type="text"  onChange={(e)=>{setname(e.target.value)}} />
//   <input type="number" value={age} onChange={(e)=>{setage(e.target.value)}} />
//   <button onClick={create_user}> Create user</button>
  
//   {elements}
  
//       </div>
//     );
// }

