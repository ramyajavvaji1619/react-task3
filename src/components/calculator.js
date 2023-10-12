
import React, { useState } from 'react';
import './index.css';


function Calculator() {
  const [text, setText] = useState('');
  const [letterCount, setLetterCount] = useState(0);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    const count = inputText.length;
    setLetterCount(count);
  };

  return (
    
    <div className='maths'>
     <div className='container'>
        <div className='row'>
            <div className='col-md-6 mt-5'>
      <h1 className='cal'>calculate the <br/> letters you <br/> enter</h1>
      <p style={{color:"white", fontSize:"10px"}}>enter the pharse</p>
      <textarea
        placeholder="Enter the pharse..."
        rows="2"
        cols="30"
        value={text}
        onChange={handleInputChange}
      />
      <p style={{color:"white", fontWeight:'500'}}>Number of letters: {letterCount}</p>
   
    </div>
    <div className='col-md-6 mt-5'>
        <img src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" style={{height:"300px", width:"350px"}}/>
    </div>
    </div>
    </div>
  </div>

  );
}

export default Calculator;

