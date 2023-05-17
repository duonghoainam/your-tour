import React,{useState} from 'react'
const Counter = () => {
  const[count,setCount]=useState(0);
  const inc=()=>{
    setCount(count+1);
  }
  const dec=()=>{
    if(count>0)
    setCount(count-1);
  }
  return (
    <div className='button-counter-group'>
      <button className='button-counter'  onClick={dec}>-</button>
      {count}
      <button className='button-counter' onClick={inc} >+</button>

    </div>
  )
}
export default Counter