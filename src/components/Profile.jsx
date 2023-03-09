import React, {useState, useEffect} from "react";
import { grabToken } from "../auth";
import { myData } from "../api"; 


const Profile = () => {  

  const gatherMyInfo = async ()=>{ 
    const  token = grabToken();
   console.log("token in the info function", token)
    const myInfo = await myData(token);
    console.log ("this is my info",myInfo) 
    console.log(token)
 

  


  
  }

    useEffect(()=>{
  gatherMyInfo()
},[])

 

  return(
    <div>
      <div>{data.post.map((element)=>{
        return(<>
      <h2>{element.title}</h2>
          <p>{element.description}</p>
          <p>{element.price}</p>

        </>)
      })}</div>
    </div>
  )
    
  
};

export default Profile;
