import  {useState} from 'react';

export const useIncrement =(valueIn)=>{
    const [count, setCount] = useState(0);
    const incrementNumber= () =>setCount(count+valueIn)
    return [count,incrementNumber];
}