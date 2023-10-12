import React, { useState } from 'react';
import './index.css';

function Random() {
     const [randomNumber, setRandomNumber]= useState(null);
     const generateRandomNumber= () => {
      const newRandomNumber = Math.floor(Math.random()*101);
      setRandomNumber(newRandomNumber)
     }
   
    return (
      
      <div className='ramya'>
       <div className='card'>
        <h3 style={{color:"blue", paddingTop:"4vh"}}>Random Number</h3>
        <p style={{fontWeight:'500',fontSize:"12px"}}>Generate a random number in the <br/>range of 0 to 100</p>
        <button className='btn' onClick={generateRandomNumber}>Generate</button>
        {randomNumber !== null && (
        <p style={{fontWeight: 'bold',fontSize:"30px",color:"red"}}>{randomNumber}</p>)}
       </div>
      </div>
    );
    
}
  
  export default Random;
  

