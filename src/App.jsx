
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByRange, reset } from './Redux/CounterSlice'
import { useState } from 'react'

function App() {
  const [range,setRange]=useState("")
  // we want to call actions for increment,decrement,reset
  const dispatch=useDispatch()
  // use to access the state
  const count =useSelector((state)=>state.counterReducer.value)

const handleIncrement=()=>{
  if(!range)
  {
    alert("Please Enter A value")
  }
  else{
    dispatch(incrementByRange(Number(range)))
  }
}

console.log(range);

  return (
    <>
     <div style={{width:"100%",height:"100vh",backgroundColor:"black"}} className='d-flex align-items-center justify-content-center'>
      <div className="bg-light p-5 rounded" style={{width:"400px"}}>
        <h2 className='text-center text-primary'>Counter Application</h2>
        <h1 className='text-center my-5' style={{fontSize:"100px"}}>{count}</h1>
        <div className="d-flex justify-content-between">
          <button className='btn btn-success p-3' onClick={()=>dispatch(increment())}>Increment</button>
          <button className='btn btn-danger' onClick={()=>dispatch(reset())}>Reset</button>
          <button className='btn btn-warning' onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
        <div className="d-flex mt-5">
          <input type="text" placeholder=' Enter the Range' className='form-control' onChange={(e)=>setRange(e.target.value)}/>
          <button className='btn btn-primary  ms-3' onClick={handleIncrement}>Increment By Range</button>
        </div>
      </div>

     </div>
    </>
  )
}

export default App
