import './App.css';
import React from 'react';
import { Count } from './components/Count';
import { Count2 } from './components/Count2';


export const App=() =>{
  return(
    <div className='container align-items-center float-start'>
        <Count></Count>
        <br></br>
        <Count2></Count2>
    </div>
  );
}

