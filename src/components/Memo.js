import React from 'react'
import { useMemo, useState } from 'react';


const Memo = () => {
    const [add, setAdd] = useState(0)
    const [minus, setMinus] = useState(100)
  
    const Mul = useMemo(function multiply(){
        console.log("*********")
        return add*2;
        
      },[add])
    
      return (
        <div className="App">
          <h1>Let's Learn useMemo</h1>
          {/* calling multiply function */}
          {Mul}  <br/>
          <button onClick={()=>setAdd(add+1)} style={{margin:10}}>Addition</button>
          <span>{add}</span> <br/>
          <button onClick={()=>setMinus(minus-1)}>Subtraction</button>
          <span>{minus}</span>
        </div>
      );
    }
export default Memo
