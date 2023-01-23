import React from 'react';
import { useIncrement } from '../hook/useIncrement';

export const Count2=() =>{
     let [count,setCount] = useIncrement(2);
   
  return(
    <>
        <p>Count  {count}</p>
        <button onClick={setCount}>Add 2</button>
    </>
  );
}

