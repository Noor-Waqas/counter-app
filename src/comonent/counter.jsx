import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "./counterSlice";
import { Button } from 'antd';
const counter = () => {
  const counter = useSelector(state => state.counter)
  const dispatch= useDispatch()
  return (
    
      <div style={{display:"flex", justifyContent:"center"}}>
         <div>
         <h2>Counter App</h2>
         <div>
           <Button onClick={()=>dispatch(decrement())} style={{width:"70px"}}>-</Button>
           <span style={{padding:"40px"}}>{counter}</span>
           <Button onClick={()=>dispatch(increment())} style={{width:"70px"}}>+</Button>
         </div>
         </div>
       </div>
  
  )
}

export default counter
