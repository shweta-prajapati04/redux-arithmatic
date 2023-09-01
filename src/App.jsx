import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux';
import { handleAdd, handleDiv, handleMul, handleReset, handleSub } from './redux/Actiontype';

function App() {
  let [inputvalue, setValue] = useState(0);
  let dispatch = useDispatch();
  let count = useSelector((count) => count)
  return (
    <>
      <h2 className='titleh1'>Redux Arithmatic Operation</h2>
      <div className='col-md-5 mx-auto'>

        <div className='alert alert-warning'>
          <label> Enter No for Arithmatic operation</label>
          <input className='text-input' required value={inputvalue}
            type="number" onChange={(e) => setValue(e.target.value)} ></input>
        </div>
        <br></br><br></br>
        <div>
        <label className='hd'> </label>
          <div className='btn btn-outline-danger  ml-xs' ><h1>{count}</h1></div></div>
        <br></br><br></br>
       
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button className='btn btn-dark ml-xs' onClick={() => dispatch(handleAdd(inputvalue))} >+</button>
          <button className='btn btn-dark' onClick={() => dispatch(handleSub(inputvalue))} >-</button>
          <button className='btn btn-dark' onClick={() => dispatch(handleMul(inputvalue))} >*</button>
          <button className='btn btn-dark' onClick={() => dispatch(handleDiv(inputvalue))} >/</button>
          <button className='btn btn-danger' onClick={() => dispatch(handleReset())} >Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
