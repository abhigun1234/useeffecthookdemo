import React, { useEffect, useState } from 'react';

function HookCounterConditional(props) {
    const[count,setCount]=useState(0)
    const[name,setName]=useState('')
    useEffect(()=>{
        console.log("useEffect updating document")
        document.title=`Clicked ${count}`
    },[count])
    function getNameChange(e){
          setName(e.target.value)
    }
    return (
        <div>
             <input type="text" value={name} onChange={getNameChange}></input>
            <button onClick={()=>setCount(count+1)}> counter{count}</button> 
        </div>
    );
}

export default HookCounterConditional;