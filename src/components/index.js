 import React, { useState } from 'react';
import './index.css';;
 
const Index = props =>{
   const {destinationDetails} = props;


   const {imgUrl,name,uniqueNo} = destinationDetails; 

   return(
       <li className="card user-card-container" style={{listStyleType:"none"}}>
       
     <img src={imgUrl} className="profile-pic w-100" alt="profile-pic" />
    
     <div className="user-details-container">
       <h1 className="user-name"> {name} </h1>
     </div>
   </li>

   )
}

export default Index;