import React from 'react';
import { useIncrement } from '../hook/useIncrement';

export const Count=() =>{
     let [count,setCount] = useIncrement(1);
  return(
    <>
        <p>Count  {count}</p>
        <button onClick={setCount}>Add 1</button>
    </>
  );
}

