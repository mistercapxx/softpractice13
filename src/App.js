import React, { useState } from 'react';
import { Route, Routes, useNavigate  } from 'react-router-dom'; 
import './App.css';
import Subtask1 from './Subtask1';
import Subtask2 from './Subtask2';
import Subtask3 from './Subtask3';
import Subtask4 from './Subtask4';

export default function App() {

  const [inputValue,setInputValue] = useState('');
  const [isCheckboxChecked,setIsCheckboxChecked] = useState(false);
  // const history = useHistory();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleLinkCLick = (e) => {
    if (!parseInt(inputValue) % 2 === 0) {
    { e.preventDefault();
      // history.push('/subtask3');  
      navigate('/subtask3');
  }}
}
  const handleCheckboxChange =(e) => {
    setIsCheckboxChecked(e.target.checked);
    if(e.target.checked)
    navigate('/subtask4');
  }
  


  return (

    <div className="App">
      <h1>React Marathon</h1>
      <h2>The topic 'Routes'</h2>
      <a href='/' onClick={handleLinkCLick}>Show protected information if</a>
      <span>&nbsp;</span>
      <input size="5" value={inputValue} onChange={handleInputChange}></input> is odd
      <div className="mainClass">
        Go to the component programmatically, by checking the box:{" "}
        <input type="checkbox" checked={isCheckboxChecked} onChange={handleCheckboxChange}></input>
      </div>
      <Routes>
      <Route path="/subtask1/:param" element={<Subtask1/>}/>
      <Route path="/subtask2" element={<Subtask2/>}/>
      <Route path="/subtask3" element={<Subtask3/>} />
      <Route path="/subtask4" element={<Subtask4 />} />
      </Routes>
    </div>
   
  );
}
