


// Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter } from './Redux/counterSlice';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);

  return (
    <div style={{ textAlign: "center" }} className='my-5'>
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 my-3" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
          <h1 style={{ fontSize: "100px" }}>{count}</h1>

          <button onClick={() => dispatch(incrementCounter())} className='btn btn-primary mx-2 my-2'>Increment</button>
          <button onClick={() => dispatch(decrementCounter())} className='btn btn-danger mx-2 my-2'>Decrement</button>
          <button onClick={() => dispatch(resetCounter())} className='btn btn-dark mx-2 my-2'>Reset</button>

        </div>
        <div className="col-lg-3"></div>
      </div>

    </div>
  );
}

export default Counter;
