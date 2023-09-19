import React, { useContext } from 'react'
import {data,data1} from '/home/ksnikaksi163/hooks/src/App.js';

const ChildC = () => {
    const name = useContext(data);
    const age = useContext(data1);
  return (
    <div>
      <h1>My name is {name} and I am {age} years old!</h1>
    </div>
  )
}

export default ChildC
